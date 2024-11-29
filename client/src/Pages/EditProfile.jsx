import React, { useEffect, useState } from "react";

import {
  Avatar,
  Button,
  TextField,
  Typography,
  Paper,
  Grid,
  Collapse,
  MenuItem,
} from "@mui/material";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaSchool,
  // FaBriefcase,
  FaPlusCircle,
  FaMinusCircle,
} from "react-icons/fa";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase.config";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";
import { IoMdArrowRoundBack } from "react-icons/io";

function EditProfile() {
  const navigate = useNavigate();
  ////-----------COLLAPSE states----------------////////////
  const [showEducation, setShowEducation] = useState(false);
  const [showCareer, setShowCareer] = useState(false);
  const [showBio, setShowBio] = useState(false);
  const [showOtherInfo, setShowOtherInfo] = useState(false);
  const [showPersonalInfo, setShowPersonalInfo] = useState(false); // State for Personal Info
  // const [profileImage, setProfileImage] = useState(null);
  // const [coverImage, setCoverImage] = useState(null);
  // const [showProfileEdit, setShowProfileEdit] = useState(false);
  // const [showCoverEdit, setShowCoverEdit] = useState(false);
  // const [ppuploading, setppuploading] = useState(false);
  // const [cpuploading, setcpuploading] = useState(false);
  ////-------------INPUT FIELDS states------------------//////////

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [gender, setGender] = useState("");
  const [occupation, setOccupation] = useState("");
  // const [profilePic, setProfilePic] = useState("");
  const [coverPhoto, setCoverPhoto] = useState("");
  const [school, setSchool] = useState("");
  const [college, setCollege] = useState("");
  const [university, setUniversity] = useState("");
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");
  const [madrasha, setMadrasha] = useState("");

  /////////-----------------Other States----------------//////////
  const [updating, setUpdating] = useState(false);
  ///////------retrieve loggedin user data first----------------/////

  useEffect(() => {
    getLoggedInUserData();
  }, []);
  const getLoggedInUserData = async () => {
    const user_id = JSON.parse(localStorage.getItem("user_id"));
    try {
      const response = await axios.get(
        `https://inpr.onrender.com/users/${user_id}`
      );

      setFirstName(response.data.user.firstName);
      setLastName(response.data.user.lastName);
      setEmail(response.data.user.email);
      setPhoneNumber(response.data.user.phoneNumber);
      setPassword(response.data.user.password);
      setDateOfBirth(response.data.user.dateOfBirth);
      setGender(response.data.user.gender);
      setOccupation(response.data.user.occupation);
      // setProfilePic(response.data.user.profilePic);
      setCoverPhoto(response.data.user.coverPhoto);
      setSchool(response.data.user.school);
      setCollege(response.data.user.college);
      setUniversity(response.data.user.university);
      setBio(response.data.user.bio);
      setLocation(response.data.user.location);
      setMadrasha(response.data.user.madrasha);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  ////////////////////////////

  // const handleProfileImageChange = async (e) => {
  //   try {
  //     const file = e.target.files[0];
  //     if (file) {
  //       setppuploading(true);
  //       const storageRef = ref(storage, `profilePics/${file.name}`); // Create a reference to the storage path
  //       const snapshot = await uploadBytes(storageRef, file);
  //       const downloadURL = await getDownloadURL(snapshot.ref); // Get the file's download URL after upload
  //       setProfilePic(downloadURL);
  //       setppuploading(false);

  //       const reader = new FileReader();
  //       reader.onloadend = async () => {
  //         await setProfileImage(reader.result);
  //       };
  //       reader.readAsDataURL(file);
  //     }
  //   } catch (error) {
  //     toast.error("Failed!please try again later");
  //   }
  // };

  // const handleCoverImageChange = async (e) => {
  //   try {
  //     const file = e.target.files[0];
  //     if (file) {
  //       setcpuploading(true);
  //       const storageRef = ref(storage, `coverPhotos/${file.name}`); // Create a reference to the storage path
  //       const snapshot = await uploadBytes(storageRef, file);
  //       const downloadURL = await getDownloadURL(snapshot.ref); // Get the file's download URL after upload
  //       setCoverPhoto(downloadURL);
  //       setcpuploading(false);
  //       const reader = new FileReader();
  //       reader.onloadend = async () => {
  //         await setCoverImage(reader.result);
  //       };
  //       reader.readAsDataURL(file);
  //     }
  //   } catch (error) {
  //     toast.error("failed! please try again later");
  //   }
  // };

  const updateInfo = async (e) => {
    e.preventDefault();

    const userObject = {
      firstName,
      lastName,
      email,
      phoneNumber,
      dateOfBirth,
      gender,
      occupation,
      // profilePic,
      // coverPhoto,
      school,
      college,
      university,
      bio,
      location,
      madrasha,
    };
    try {
      setUpdating(true);
      const user_id = JSON.parse(localStorage.getItem("user_id"));
      if (!user_id) {
        navigate("/login");
      }

      const response = await axios.put(
        `https://inpr.onrender.com/users/${user_id}`,
        userObject
      );
      const authorId = response.data.user._id;
      const post = {
        authorPp: response.data.user.profilePic,
        authorName:
          response.data.user.firstName + " " + response.data.user.lastName,
      };
      const updatedPost = await axios.put(
        `https://inpr.onrender.com/posts/author/${authorId}`,
        post
      );
      setUpdating(false);
      console.log(updatedPost);
      toast.success(response.data.message);
      navigate("/profile");
    } catch (error) {
      setUpdating(false);
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <>
      {/* <Navigationbar /> */}
      <div style={{}}>
        <Paper elevation={3} style={{ padding: "10px" }}>
          <IoMdArrowRoundBack
            style={{ fontSize: "25px", cursor: "pointer" }}
            onClick={() => {
              navigate("/profile");
            }}
          />
          <h3
            style={{
              marginBottom: "10px",
              marginTop: "-30px",
              textAlign: "center",
              color: "darkcyan",
            }}
          >
            Edit Profile
          </h3>
       
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Avatar
              src="/user.png"
              alt="Profile Picture"
              style={{
                width: "110px",
                height: "110px",
                margin: "5px auto",
                marginLeft: "30vw",
                border: "3px solid darkcyan",
                boxShadow:"3px 3px 7px rgba(190,190,190,.7)"
              }}
            />
            <label htmlFor="profile-image-input">
              <span
                style={{
                  fontSize: "19px",
                  color: "darkcyan",
                  fontWeight: "bold",
                  textShadow: "1px 1px 1px white",
                  cursor: "pointer",
                }}
              >
                Edit
              </span>
            </label>
          </div>
          <input
            type="file"
            accept="image/*"
            // onChange={handleProfileImageChange}
            style={{ display: "none" }}
            id="profile-image-input"
          />

          <div style={{ marginBottom: "10px" }}>
            <input
              type="file"
              accept="image/*"
              // onChange={handleCoverImageChange}
              style={{ display: "none" }}
              id="cover-image-input"
            />

            <label htmlFor="cover-image-input">
              <p
                style={{
                  fontSize: "19px",
                  color: "darkcyan",
                  fontWeight: "bold",
                  textShadow: "1px 1px 1px white",
                  cursor: "pointer",
                  textAlign:"right"
                }}
              >
                Edit
              </p>
            </label>
            {coverPhoto ? (
              <div
                style={{
                  marginTop: "10px",
                  height: "auto",
                  borderRadius: "5px",
                  padding: "2px",
                  border: "2px solid rgba(0, 0, 0, 0.32)",

                }}
              >
                <img
                  src={ coverPhoto}
                  alt="Cover"
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                />
              </div>
            ) : (
              <div
                style={{
                  marginTop: "10px",
                  height: "25vh", // Set height to 25vh for the placeholder
                  backgroundColor: "#e0e0e0", // Placeholder background color
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h6" style={{ color: "#999999" }}>
                  Cover Photo
                </Typography>
              </div>
            )}
          </div>

          {/* Bio Section */}
          <Grid item xs={12}>
            <Button
              onClick={() => setShowBio(!showBio)}
              startIcon={showBio ? <FaMinusCircle /> : <FaPlusCircle />}
              color="primary"
            >
              Bio
            </Button>
            <Collapse in={showBio}>
              <TextField
                fullWidth
                label="Bio"
                multiline
                rows={4}
                variant="outlined"
                style={{ marginTop: "10px" }}
                value={bio}
                onChange={(e) => {
                  setBio(e.target.value);
                }}
              />
            </Collapse>
          </Grid>

          {/* Personal Info Section */}
          <div style={{ marginTop: "10px" }}>
            <Button
              onClick={() => setShowPersonalInfo(!showPersonalInfo)} // Toggle Personal Info
              startIcon={
                showPersonalInfo ? <FaMinusCircle /> : <FaPlusCircle />
              }
              color="primary"
            >
              Personal Info
            </Button>
            <Collapse in={showPersonalInfo}>
              <Grid container spacing={2} style={{ marginTop: "10px" }}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    variant="outlined"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                    InputProps={{
                      startAdornment: <FaUser style={{ marginRight: 8 }} />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    variant="outlined"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                    InputProps={{
                      startAdornment: <FaUser style={{ marginRight: 8 }} />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    InputProps={{
                      startAdornment: <FaEnvelope style={{ marginRight: 8 }} />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    variant="outlined"
                    value={phoneNumber}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                    InputProps={{
                      startAdornment: <FaPhone style={{ marginRight: 8 }} />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Location"
                    variant="outlined"
                    value={location}
                    onChange={(e) => {
                      setLocation(e.target.value);
                    }}
                    InputProps={{
                      startAdornment: (
                        <FaMapMarkerAlt style={{ marginRight: 8 }} />
                      ),
                    }}
                  />
                </Grid>
              </Grid>
            </Collapse>
          </div>

          {/* Education Section */}
          <div style={{ marginTop: "10px" }}>
            <Button
              onClick={() => setShowEducation(!showEducation)}
              startIcon={showEducation ? <FaMinusCircle /> : <FaPlusCircle />}
              color="primary"
            >
              Education
            </Button>
            <Collapse in={showEducation}>
              <Grid container spacing={2} style={{ marginTop: "10px" }}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="School"
                    variant="outlined"
                    value={school}
                    onChange={(e) => {
                      setSchool(e.target.value);
                    }}
                    InputProps={{
                      startAdornment: <FaSchool style={{ marginRight: 8 }} />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="College"
                    variant="outlined"
                    value={college}
                    onChange={(e) => {
                      setCollege(e.target.value);
                    }}
                    InputProps={{
                      startAdornment: <FaSchool style={{ marginRight: 8 }} />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="University"
                    variant="outlined"
                    value={university}
                    onChange={(e) => {
                      setUniversity(e.target.value);
                    }}
                    InputProps={{
                      startAdornment: <FaSchool style={{ marginRight: 8 }} />,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Madrasa"
                    variant="outlined"
                    value={madrasha}
                    onChange={(e) => {
                      setMadrasha(e.target.value);
                    }}
                  />
                </Grid>
              </Grid>
            </Collapse>
          </div>

          {/* Career Section */}
          <div style={{ marginTop: "10px" }}>
            <Button
              onClick={() => setShowCareer(!showCareer)}
              startIcon={showCareer ? <FaMinusCircle /> : <FaPlusCircle />}
              color="primary"
            >
              Career
            </Button>
            <Collapse in={showCareer}>
              <Grid container spacing={2} style={{ marginTop: "10px" }}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Occupation"
                    value={occupation}
                    onChange={(e) => {
                      setOccupation(e.target.value);
                    }}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Current Job Title"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Company Name"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Previous Job"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </Collapse>
          </div>

          {/* Other Info Section */}
          <div style={{ marginTop: "10px" }}>
            <Button
              onClick={() => setShowOtherInfo(!showOtherInfo)}
              startIcon={showOtherInfo ? <FaMinusCircle /> : <FaPlusCircle />}
              color="primary"
            >
              Other Info
            </Button>
            <Collapse in={showOtherInfo}>
              <Grid container spacing={2} style={{ marginTop: "10px" }}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Gender"
                    select
                    variant="outlined"
                    defaultValue=""
                    value={gender}
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Date of Birth"
                    type="date"
                    variant="outlined"
                    value={dateOfBirth}
                    onChange={(e) => {
                      setDateOfBirth(e.target.value);
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
              </Grid>
            </Collapse>
          </div>

          {/* Save Changes Button */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "10px auto",
            }}
          >
            <Button
              style={{}}
              variant="contained"
              color={updating ? "warning" : "secondary"}
              onClick={updateInfo}
            >
              {updating ? "Profile Updatng..." : " Save Changes"}
            </Button>
          </div>
        </Paper>
      </div>
    </>
  );
}

export default EditProfile;
