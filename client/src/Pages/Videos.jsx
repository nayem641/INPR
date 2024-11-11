import React, { useRef, useState } from "react";
import Navigationbar from "../Components/Navigationbar";
import { FaRegCommentDots, FaSearch } from "react-icons/fa";
import { BiLike, BiSolidMoviePlay } from "react-icons/bi";
import { RiLiveFill } from "react-icons/ri";
import { LuVideotape } from "react-icons/lu";
import { PiShareFatLight } from "react-icons/pi";
import { BsThreeDots } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import "./Styles/Videos.css";

function Videos() {
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
    <div className="video-page">
      <Navigationbar />
      <div className="friend-search-container">
        <div className="">Videos</div>
        <div className="searchbox">
          <FaUser className="icon" />
          <FaSearch className="icon" />
        </div>
      </div>

      <div className="video-sorting-container">
        <div className="sorting-div">
          <BiSolidMoviePlay className="sorting-icon" />
          For you
        </div>
        <div className="sorting-div">
          <LuVideotape className="sorting-icon" /> Reels
        </div>
        <div className="sorting-div">
          <RiLiveFill className="sorting-icon" /> Live
        </div>
      </div>

      {["Shahidur Rahman", "Halima Marjan", "Imtiyaz Hossain"].map(
        (author, index) => (
          <div key={index}>
            <div className="postContainer-Uppersection">
              <div className="post-owner">
                <img src="user.png" alt="Profile" />
                <div>
                  <span>
                    <a href="#">{author}</a>
                  </span>
                  <p>{index + 1} days ago</p>
                </div>
              </div>
              <BsThreeDots className="post-Controll" />
            </div>
            <div>
              <div
                style={{
                  position: "relative",
                  paddingTop: "56.25%", // 16:9 aspect ratio
                }}
              >
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src="video.mp4"
                  type="video/mp4"
                  poster=""
                  onMouseOver={() => handleMouseOver(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  onClick={() => handleClick(index)}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                    objectFit: "cover",
                  }}
                  preload="metadata"
                  controls={controlsVisible === index} // Show controls only when clicked
                />
              </div>
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
        )
      )}
    </div>
  );
}

export default Videos;
