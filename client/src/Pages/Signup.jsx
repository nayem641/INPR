import { useState } from "react";
import { useNavigate } from "react-router";
import { RiImageAddFill } from "react-icons/ri";
import "./Styles//Signup.css";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaTint,
  FaBriefcase,
  FaPhone,
  FaBirthdayCake,
  FaVenusMars,
  FaCheck,
} from "react-icons/fa";
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";

import styles from "./SignupStyles";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [occupation, setOccupation] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  // const [uploading, setUploading] = useState(false);
  // const [profilePic, setProfilePic] = useState("");

  // const uploadProfilePic = async (e) => {
  //   var file = e.target.files[0];
  //   if (
  //     !firstName ||
  //     !lastName ||
  //     !email ||
  //     !password ||
  //     !dateOfBirth ||
  //     !gender ||
  //     !phoneNumber ||
  //     !occupation ||
  //     !bloodGroup
  //   ) {
  //     return toast.error("Please fill previous fields");
  //   }
  //   if (!file) {
  //     toast.error("Please select a profile picture");
  //     return;
  //   }
  //   setUploading(true);
  //   try {
  //     e.preventDefault();
  //     console.log("uploading...");
  //     const storageRef = ref(storage, `profilePics/${file.name}`); // Create a reference to the storage path
  //     const snapshot = await uploadBytes(storageRef, file);
  //     const downloadURL = await getDownloadURL(snapshot.ref); // Get the file's download URL after upload
  //     setProfilePic(downloadURL);

  //     toast("profile uploaded");
  //     console.log(downloadURL);
  //     setUploading(false);
  //   } catch (error) {
  //     toast.error(error.message);
  //     console.error(error);
  //     setUploading(false);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userObject = {
      firstName,
      lastName,
      email,
      password,
      dateOfBirth,
      gender,
      phoneNumber,
      occupation,
      bloodGroup,
    };
    // if (
    //   !firstName ||
    //   !lastName ||
    //   !email ||
    //   !password ||
    //   !dateOfBirth ||
    //   !gender ||
    //   !phoneNumber ||
    //   !occupation ||
    //   !bloodGroup
    // ) {
    //   return toast.error("Please fill previous fields");
    // }
   
      fetch("https://inpr.onrender.com/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userObject),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            toast.success(data.message);
            console.log(data.createdUser);
         
            navigate("/login");
          } else {
            toast.error(data.message);
            console.log(data.message);
          }
        })
        .catch((error) => {
          console.error(error.message);
          toast.error(error.message);
        });
    
  };

  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };
  // ----------------VIEW------------------------------------
  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <>
            <h1
              style={{
                marginBottom: "20px",
                background:
                  "linear-gradient(to right, #ff7e5f, #feb47b, #86a8e7, #7f7fd5, #b06ab3)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Join INPR
            </h1>
            <div style={{ ...styles.step, justifyContent: "center" }}>
              <img
                src="/signup.png"
                alt="/desktop.png"
                style={{ ...styles.image, width: "300px", height: "auto" }}
              />
              <button
                onClick={nextStep}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  background: "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "22px",
                  // fontWeight: "bold",
                  transition: "background 0.3s ease, color 0.3s ease",
                  marginBottom: "20px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "blue";
                  e.target.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "#007bff";
                  e.target.style.color = "white";
                }}
              >
                Let's Start
              </button>
              <span style={{ fontSize: "18px", color: "gray" }}>
                Have an account?
                <Link
                  to={"/login"}
                  style={{
                    color: "#007bff",
                    fontSize: "20px",
                    marginLeft: "10px",
                    // fontWeight: "bold",
                  }}
                >
                  Login
                </Link>
              </span>
            </div>
          </>
        );
      case 1:
        return (
          <>
            <div style={styles.step}>
              <div style={styles.stepIndicator}>
                <div style={styles.stepNumber}>1</div>
                <FaCheck style={styles.checkIcon} />
              </div>
              <div style={styles.inputContainer}>
                <FaUser style={styles.icon} />
                <input
                  type="text"
                  name="firstName"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  value={firstName}
                  placeholder="First Name"
                  style={styles.input}
                />
              </div>
              <div style={styles.inputContainer}>
                <FaUser style={styles.icon} />
                <input
                  type="text"
                  name="lastName"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  value={lastName}
                  placeholder="Last Name"
                  style={styles.input}
                />
              </div>
              <div style={styles.inputContainer}>
                <FaBriefcase style={styles.icon} />
                <input
                  type="text"
                  name="occupation"
                  onChange={(e) => {
                    setOccupation(e.target.value);
                  }}
                  value={occupation}
                  placeholder="Occupation"
                  style={styles.input}
                />
              </div>

              <div className="step-btn-conatiner">
                <span onClick={prevStep}>Back</span>
                <span onClick={nextStep}>Next</span>
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div style={styles.step}>
              <div style={styles.stepIndicator}>
                <div style={styles.stepNumber}>2</div>
                <FaCheck style={styles.checkIcon} />
              </div>
              <div style={styles.inputContainer}>
                <FaEnvelope style={styles.icon} />
                <input
                  type="email"
                  name="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  placeholder="Email"
                  style={styles.input}
                />
              </div>
              <div style={styles.inputContainer}>
                <FaPhone style={styles.icon} />
                <input
                  type="tel"
                  name="phoneNumber"
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  value={phoneNumber}
                  placeholder="Phone Number"
                  style={styles.input}
                />
              </div>
              <div style={styles.inputContainer}>
                <FaLock style={styles.icon} />
                <input
                  type="password"
                  name="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                  placeholder="Password"
                  style={styles.input}
                />
              </div>
              <div className="step-btn-conatiner">
                <span onClick={prevStep}>Back</span>
                <span onClick={nextStep}>Next</span>
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div style={styles.step}>
              <div style={styles.stepIndicator}>
                <div style={styles.stepNumber}>3</div>
                <FaCheck style={styles.checkIcon} />
              </div>

              <div style={styles.inputContainer}>
                <FaBirthdayCake style={styles.icon} />
                <input
                  type="date"
                  name="dateOfBirth"
                  onChange={(e) => {
                    setDateOfBirth(e.target.value);
                  }}
                  value={dateOfBirth}
                  placeholder="Date of Birth"
                  style={styles.input}
                />
              </div>

              <div style={styles.inputContainer}>
                <FaTint style={styles.icon} />
                <select
                  name="bloodGroup"
                  onChange={(e) => {
                    setBloodGroup(e.target.value);
                  }}
                  value={bloodGroup}
                  style={styles.input}
                >
                  <option value=""> Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>

              <div style={styles.inputContainer}>
                <FaVenusMars style={styles.icon} />
                <select
                  name="gender"
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                  value={gender}
                  style={styles.input}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="step-btn-conatiner">
                <span onClick={prevStep}>Back</span>
                <span onClick={nextStep}>Next</span>
              </div>
            </div>
          </>
        );
      case 4:
        return (
          <div>
            <h3>Touch to choose photo</h3>
            <label htmlFor="profilePic">
              <div
                htmlFor="profilePic"
                className="pppreview"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "75vw",
                  margin: "15px auto",
                  padding: "10px",
                  backgroundColor: "rgba(0,0,0,.15)",
                  borderRadius: "5px",
                }}
              >
                <img
                  src="placeholder.webp"
                  height={"120px"}
                />
              </div>
            </label>

            <div style={styles.inputContainer}>
              <input
                // onChange={uploadProfilePic}
                placeholder="Choose Photo"
                type="file"
                name="profilePic"
                id="profilePic"
                style={{ display: "none" }}
              />
            </div>

            <div className="step-btn-conatiner">
              {/* <span >
                <GrLinkPrevious className="step-btn" onClick={prevStep} />
              </span> */}
              <span onClick={prevStep} style={{ marginLeft: "0px" }}>
                Back
              </span>
              <button
                className="submitButton"
                onClick={handleSubmit}
                style={{
                  ...styles.button,
                  backgroundColor: "blue",
                }}
              >
                SUBMIT
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#f0f2f5",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={styles.form}>
        <div style={step < 5 ? styles.progressBar : styles.progress}>
          <div
            style={{ ...styles.progress, width: `${(step / 4) * 100}%` }}
          ></div>
        </div>
        {renderStep()}
      </div>
    </div>
  );
};

export default Signup;
