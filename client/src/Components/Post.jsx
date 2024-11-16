import React, { useRef, useState } from "react";
import "./Styles/Post.css";
import { BsThreeDots } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa6";
import { PiShareFatLight } from "react-icons/pi";
import { toast } from "react-toastify";

import { useNavigate } from "react-router";
import axios from "axios";

function Post({ post }) {
  const navigate = useNavigate();
  const user_id = JSON.parse(localStorage.getItem("user_id"));
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const deletePost = async (postId) => {
    const response = await axios.delete(
      `https://inpr.onrender.com/posts/${postId}`
    );
    setIsPopupVisible(false);
    toast.success(response.data.message);
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
              <div className="popup-div">
       
                <div className="popup-menu-div" onClick={togglePopup}>
                  Copy Link
                </div>
                <div className="popup-menu-div" onClick={togglePopup}>
                  Follow This ID
                </div>
                <div className="popup-menu-div" onClick={togglePopup}>
                  Report Post
                </div>
                {user_id === post.authorId && (
                  <div
                    className="popup-menu-div"
                    onClick={() => {
                      togglePopup;
                      navigate("/updatepost", { state: post._id });
                    }}
                  >
                    Edit Post
                  </div>
                )}
                {user_id === post.authorId && (
                  <div
                    className="popup-menu-div"
                    onClick={() => {
                      togglePopup;
                      deletePost(post._id);
                    }}
                    style={{ color: "red" }}
                  >
                    Delete
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="postBody-container">
          <div className="post-caption">{post.text && <p>{post.text}</p>}</div>
          {post.image && (
            <div className="post-photos">
              {post.image && <img src={post.image} alt="" />}
            </div>
          )}
          {post.video && (
            <div style={{ padding: "5px", height: "auto" }}>
              <video src={post.video} controls />
            </div>
          )}
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
