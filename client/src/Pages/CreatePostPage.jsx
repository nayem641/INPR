import "./Styles/CretatePostPage.css";
import { FaCamera, FaFont, FaPhotoVideo, FaUserPlus } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { RiFileVideoFill } from "react-icons/ri";

import { FaFaceLaugh, FaVideo } from "react-icons/fa6";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { storage } from "../firebase.config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import axios from "axios";

function CreatePostPage() {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [posting, setPosting] = useState(false);
  const [video,setVideo] = useState("");

  const handleImageUpload = async (e) => {
    e.preventDefault();
    try {
      setPosting(false);
      setImage(null);
      const file = e.target.files[0];
      if (file) {
        setUploading(true);
        const storageRef = ref(storage, `postPhotos/${file.name}`); // Create a reference to the storage path
        const snapshot = await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(snapshot.ref); // Get the file's download URL after upload
        !downloadURL && toast.error("failed");
        downloadURL && setImage(downloadURL);
        setUploading(false);
      }
    } catch (error) {
      toast.error("failed! Something went wrong");
      setUploading(false);
    }
  };
  const handleVideoUpload = async (e) => {
    e.preventDefault();
    
    try {
      setPosting(false);
      setImage(null);
      const file = e.target.files[0];
      if (file) {
        setUploading(true);
        const storageRef = ref(storage, `postVideos/${file.name}`); // Create a reference to the storage path
        const snapshot = await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(snapshot.ref); // Get the file's download URL after upload
        !downloadURL && toast.error("failed");
        downloadURL && setVideo(downloadURL);
        setUploading(false);
      }
    } catch (error) {
      toast.error("failed! Something went wrong");
      setUploading(false);
    }
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!text && !image &&!video ) {
        toast.error("You didn't create a post");
        return;
      }
      setPosting(true);
      const authorId = JSON.parse(localStorage.getItem("user_id"));
      const author = await axios.get(`https://inpr.onrender.com/users/${authorId}`);
      const authorName = author.data.user.firstName+" "+author.data.user.lastName;
      const authorPp = author.data.user.profilePic;
      const postObject = { text, image,video, authorId, authorName, authorPp };
      const response = await axios.post(
        "https://inpr.onrender.com/posts/",
        postObject
      );
      setPosting(false);
      console.log(response);
      setText("");
      setImage("");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main">
      <div className="createPostPage">
        <div className="header">
          <span>
            <IoMdArrowRoundBack
              style={{ fontSize: "35px" }}
              onClick={() => {
                navigate("/");
              }}
            />
          </span>
          <span>Create Post</span>
          <span>
            <button
              onClick={handlePostSubmit}
              style={{
                color:
                  uploading || posting || (!image && !text && !video)
                    ? "gray"
                    : "#007bff",
              }}
            >
              Post
            </button>
          </span>
        </div>
        <div className="poster">
          <img src="/avatar1.png" alt="" />
          <span>Shahidur Rahman</span>
        </div>
        <div className="input-area">
          {!posting && (
            <textarea
              placeholder="What's on your miind?"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          )}

          <>
            {posting && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "185px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                  }}
                >
                  {[...Array(3)].map((_, index) => (
                    <div
                      key={index}
                      style={{
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        backgroundColor: "#007bff",
                        animation: "pulse 0.6s ease-in-out infinite",
                        animationDelay: `${index * 0.2}s`,
                      }}
                    ></div>
                  ))}
                </div>
                <style>
                  {`
            @keyframes pulse {
              0%, 100% { transform: scale(1); opacity: 1; }
              50% { transform: scale(1.5); opacity: 0.3; }
            }
          `}
                </style>
              </div>
            )}
          </>

          <div className="attachment-inputs">
            {uploading && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "15vh",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                  }}
                >
                  {[...Array(3)].map((_, index) => (
                    <div
                      key={index}
                      style={{
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        backgroundColor: "#007bff",
                        animation: "pulse 0.6s ease-in-out infinite",
                        animationDelay: `${index * 0.2}s`,
                      }}
                    ></div>
                  ))}
                </div>
                <style>
                  {`
            @keyframes pulse {
              0%, 100% { transform: scale(1); opacity: 1; }
              50% { transform: scale(1.5); opacity: 0.3; }
            }
          `}
                </style>
              </div>
            )}
            {image && (
              <div
                style={{
                  padding: "10px",
                  margin: "2px auto",
                  width: "100vw",
                  height: "auto",
                }}
              >
                <img
                  src={image}
                  style={{
                    objectFit: "cover",
                    height: "15vh",
                    margin: "5px",
                  }}
                />
                <hr style={{ border: "1px dotted gray" }} />
              </div>
            )}
            {video && (
              <div
                style={{
                  padding: "10px",
                  // margin: "2px auto",
                  width: "100vw",
                  // height: "auto",
                }}
              >
                <video
                  type="/video/mp4"
                  src={video}
                  controls
                  style={{
                    objectFit: "cover",
                    opacity: "0.5",
                  }}
                />
                <hr style={{ border: "1px dotted gray" }} />
              </div>
            )}
            <>
              <input
                type="file"
                onChange={handleImageUpload}
                id="post-image-input"
                style={{ display: "none" }}
              />
              <input
                type="file"
                onChange={handleVideoUpload}
                id="post-video-input"
                style={{ display: "none" }}
              />
              <label htmlFor="post-image-input">
                <div style={{ marginTop: "10px" }} className="input-icon">
                  <FaPhotoVideo className="icon mediaIcon" />
                  Add Photo
                </div>
              </label>
              <label htmlFor="post-video-input">
                <div style={{ marginTop: "10px" }} className="input-icon">
                  <RiFileVideoFill className="icon videoIcon" />
                  Upload Video
                </div>
              </label>
              <label htmlFor="">
                <div style={{ marginTop: "10px" }} className="input-icon">
                  <FaUserPlus className="icon userIcon" />
                  Tag People
                </div>
              </label>
              <label htmlFor="">
                <div style={{ marginTop: "10px" }} className="input-icon">
                  <FaFaceLaugh className="icon emojiIcon" />
                  Feeling/Activity
                </div>
              </label>
              <label htmlFor="">
                <div style={{ marginTop: "10px" }} className="input-icon">
                  <FaVideo className="icon videoIcon" />
                  Live Video
                </div>
              </label>
              <label htmlFor="">
                <div style={{ marginTop: "10px" }} className="input-icon">
                  <FaFont className="icon fontIcon" />
                  Background Colour
                </div>
              </label>
              <label htmlFor="">
                <div style={{ marginTop: "10px" }} className="input-icon">
                  <FaCamera className="icon cameraIcon" />
                  Camera
                </div>
              </label>
            </>

            <button
              disabled={uploading}
              onClick={handlePostSubmit}
              style={{
                margin: "10px auto",
                width: "90%",
                // height: "30px",
                borderRadius: "10px",
                fontSize: "20px",
                padding: "8px 0px",
                border: "none",
                backgroundColor: !image && !text && !video ? "gray" : "#007bff",
                color: "white",
                cursor: "pointer",
                fontWeight: "bold",
                boxShadow: "0px 4px 6px rgba(0,0,0,.2)",
              }}
            >
              {posting ? "POSTING..." : "POST"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePostPage;
