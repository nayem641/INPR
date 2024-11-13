import React, { useRef, useState } from "react";
import "./Styles/Post.css";
import { BsThreeDots } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa6";
import { PiShareFatLight } from "react-icons/pi";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";

function Post({ post ,index}) {
  const navigate = useNavigate();
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleOptionClick = (option) => {
    setIsPopupVisible(false);
    switch (option) {
      case "save":
        navigate('/updatepost',{state:post._id})
        break;
      case "copy":
        navigator.clipboard.writeText(window.location.href);
        toast.success("Link copied!");
        break;
      case "follow":
        toast.info(`Following ${post.authorName}`);
        break;
      case "report":
        toast.error("Post reported.");
        break;
      default:
        break;
    }
  };


  const videoRefs = useRef([]);
  const [activeVideo, setActiveVideo] = useState(null);
  const [controlsVisible, setControlsVisible] = useState(null);

  const handleMouseOver = (index) => {
    // Play the video on hover
    if (activeVideo !== null && activeVideo !== index) {
      videoRefs.current[activeVideo].pause();
      videoRefs.current[activeVideo].currentTime = 0; // Reset to start
    }
    // Set the new active video and play it
    setActiveVideo(index);
    videoRefs.current[index].play();
  };

  const handleMouseLeave = (index) => {
    // Pause and reset the video when mouse leaves
    videoRefs.current[index].pause();
    videoRefs.current[index].currentTime = 0; // Reset to start
    // Hide controls when mouse leaves
    setControlsVisible(null);
  };

  const handleClick = (index) => {
    // Pause any other active video
    if (activeVideo !== null && activeVideo !== index) {
      videoRefs.current[activeVideo].pause();
      videoRefs.current[activeVideo].currentTime = 0; // Reset to start
    }
    // Show controls only for the clicked video
    setControlsVisible(index);
    videoRefs.current[index].play();
  };

  return (
    <>
      <div className="post-container">
        <div className="postContainer-Uppersection">
          <div className="post-owner">
            <img src={post.authorPp} alt="" />
            <div>
              <span>
                <a href="">{post.authorName}</a>
              </span>
              <p>2 days ago</p>
            </div>
          </div>

          <div style={{ position: "relative" }}>
            {/* Three Dots Icon */}
            <BsThreeDots
              onClick={togglePopup}
              className="post-Controll"
              style={{ cursor: "pointer" }}
            />

            {/* Popup menu */}
            {isPopupVisible && (
              <div
                style={{
                  position: "absolute",
                  top: "25px",
                  right: "0",
                  backgroundColor: "#f0f2f9",
                  border: "1px solid #ccc",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                  zIndex: 1000,
                  padding: "8px 0",
                  width: "140px",
                  fontFamily: "'Roboto', sans-serif",
                }}
              >
                <div
                  onClick={() => handleOptionClick("save")}
                  style={{
                    padding: "8px 12px",
                    cursor: "pointer",
                    color: "#333",
                    fontSize: "14px",
                    fontWeight: "500",
                    borderBottom: "1px solid #f0f0f0",
                  }}
                >
                  Edit Post
                </div>
                <div
                  onClick={() => handleOptionClick("copy")}
                  style={{
                    padding: "8px 12px",
                    cursor: "pointer",
                    color: "#333",
                    fontSize: "14px",
                    fontWeight: "500",
                    borderBottom: "1px solid #f0f0f0",
                  }}
                >
                  Copy Link
                </div>
                <div
                  onClick={() => handleOptionClick("follow")}
                  style={{
                    padding: "8px 12px",
                    cursor: "pointer",
                    color: "#333",
                    fontSize: "14px",
                    fontWeight: "500",
                    borderBottom: "1px solid #f0f0f0",
                  }}
                >
                  Follow This ID
                </div>
                <div
                  onClick={() => handleOptionClick("report")}
                  style={{
                    padding: "8px 12px",
                    cursor: "pointer",
                    color: "#d9534f",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Report Post
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="postBody-container">
          <div className="post-caption">{post.text && <p>{post.text}</p>}</div>
          {post.image &&
          <div className="post-photos">
            {post.image && <img src={post.image} alt="" />}
          </div>}
          {post.video &&
          <div style={{padding:"5px", height:"auto"}} >
            {post.video && <video src={post.video} controls />}
          </div>}
        </div>

        <div className="post-interactions">
          <div>
            <BiLike className="post-interaction-icon" />
            <span>15</span>
          </div>
          <div>
            <FaRegCommentDots className="post-interaction-icon" />
            <span>30</span>
          </div>
          <div>
            <PiShareFatLight className="post-interaction-icon" />
            <span>12k</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
