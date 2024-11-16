import { FaEdit, FaPlus, FaRegCommentDots } from "react-icons/fa";
import { ImAttachment } from "react-icons/im"; 
import { FaVideo } from "react-icons/fa6";
import { MdInsertPhoto } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";
import { IoArrowBack } from "react-icons/io5";

import { FaLocationDot } from "react-icons/fa6";
import { RiUserFollowFill } from "react-icons/ri";
import { MdOutlineReadMore } from "react-icons/md";

import WelcomeProfile from "../Components/WelcomeProfile";
import "./Styles/Profile.css";
import "../Components/Styles/Post.css";
import CreatePost from "../Components/CreatePost";

import { BsThreeDots } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";
import SkeletonLoader from "../Components/SkeletonLoader";
import FetchingError from "../Components/FetchingError";
import { useNavigate } from "react-router";
import { BiLike } from "react-icons/bi";
import { PiShareFatLight } from "react-icons/pi";
import { toast } from "react-toastify";
import MyPost from "../Components/MyPost";


//////////////////////////////////////////////
function Profile() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };
  const navigate = useNavigate();
  const user_id = JSON.parse(localStorage.getItem("user_id"));
  const [user, setUser] = useState({});
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const deletePost = async (postId) => {
    const response = await axios.delete(
      `https://inpr.onrender.com/posts/${postId}`
    );
    setIsPopupVisible(false);
    toast.success(response.data.message);
  };

  const getUser = async () => {
    const user_id = JSON.parse(localStorage.getItem("user_id"));
    if (!user_id) {
      navigate("/login");
    }

    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(
        `https://inpr.onrender.com/users/${user_id}`
      );
      setLoading(false);
      setError(null);
      setUser(response.data.user);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error.message);
      setUser({});
    }
  };
  const getUserPosts = async () => {
    const response = await axios.get(
      `https://inpr.onrender.com/posts/author/${user_id}`
    );
    await setUserPosts(response.data);
  };

  useEffect(() => {
    getUser();
    getUserPosts();
  }, []);
  if (loading) return <SkeletonLoader />;
  if (error) return <FetchingError message={error} />;
  if (user)
    return (
      <div className="container">
        <div
          className="header"
          style={{
            display: "flex",
            alignItems: "center",
            height: "40px",
            fontSize: "22px",
            position: "sticky",
            top: "-3px",
            backgroundColor: "white",
          }}
        >
          <IoArrowBack
            style={{
              fontSize: "25px",
              marginLeft: "2px",
              flex: "1",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/");
            }}
          />
          <span
            style={{
              flex: "9",
              textAlign: "center",
              marginRight: "15px",
              color: "black",
            }}
          >
            {user.firstName + " " + user.lastName}
          </span>
        </div>
        {/* upper section */}
        <div className="profile-pic-container">
          <div className="coverPhoto">
            <img src={`${user.coverPhoto}`} alt="" />
          </div>
          <div className="profilePic">
            <img
              src={user.profilePic}
              alt=""
              style={{ border: "3px inherit gray" }}
            />
          </div>
          <h1 style={{ fontSize: "28px", marginLeft: "15px" }}>
            {`${user.firstName} ${user.lastName}`}
          </h1>
          <hr style={{ marginTop: "5px" }} />
          {user.bio && (
            <div
              className="bio"
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
                fontSize: "18px",
                color: "rgb(31, 32, 33)",
                boxSizing: "border-box",
                padding: "5px",
                border: "10 inset rgba(0, 0, 0, 0.1)",
              }}
            >
              {user.bio && user.bio}
            </div>
          )}
          <div className="storyAndEdit">
            <button
              onClick={() => {
                navigate("/createstory");
              }}
            >
              <FaPlus />
              Story
            </button>
            <button
              onClick={() => {
                navigate("/editprofile");
              }}
            >
              <FaEdit />
              Edit Profile
            </button>
            <button>
              <BsThreeDots />
            </button>
          </div>
        </div>

        <div className="profileDetails">
          {user.university && (
            <div className="institute">
              <span>
                <FaGraduationCap className="info-icon" />
                {user.university}
              </span>
            </div>
          )}
          {user.locatiom && (
            <div className="location">
              <span>
                <FaLocationDot className="info-icon" />
                {user.location}
              </span>
            </div>
          )}
          <div className="followedBy">
            <span>
              <RiUserFollowFill className="info-icon" />
              Followed by 300 people
            </span>
          </div>

          <div
            className="seeMoreYourself"
            onClick={() => {
              navigate("/aboutme");
            }}
          >
            <span>
              <MdOutlineReadMore className="info-icon" />
              See more...
            </span>
          </div>
        </div>

        {/* friends section */}
        <div className="friends-section">
          <h4 style={{ marginLeft: "10px" }}>Friends</h4>
          <p style={{ marginLeft: "10px", marginBottom: "5px" }}>163 friends</p>
          <hr />
          <div className="friends-container">
            <span className="friend">
              <img src="/user.png" alt="" />
            </span>
            <div className="friend">
              <img src="/avatar2.jpg" alt="" />
            </div>
            <div className="friend">
              <img src="/avatar3.jpg" alt="" />
            </div>
            <div className="friend">
              <img src="/avatar4.png" alt="" />
            </div>
            <div className="friend">
              <img src="/avatar5.jpeg" alt="" />
            </div>
            <div className="friend">
              <img src="/avatar6.png" alt="" />
            </div>
          </div>
        </div>

        {/* create post */}
        <div className="create-post">
          <h4 style={{ marginLeft: "10px" }}>Posts</h4>
          <CreatePost />
          <div className="differentPost">
            <span>
              <MdInsertPhoto className="post-input-info-icon" /> Photo
            </span>
            <span>
              <FaVideo className="post-input-info-icon" />
              Video
            </span>
            <span>
              <ImAttachment className="post-input-info-icon" />
              Attach
            </span>
          </div>
        </div>
        {/* //////////////--POSTS---//////////////// */}
        {userPosts &&
          userPosts
            .slice()
            .reverse()
            .map((post) => {
              return (
                // <div className="post-container">
                //   <div className="postContainer-Uppersection">
                //     <div className="post-owner">
                //       <img src={post.authorPp} alt="" />
                //       <div>
                //         <span>
                //           <a href="">{post.authorName}</a>
                //         </span>
                //         <p>2 days ago</p>
                //       </div>
                //     </div>

                //     <div style={{ position: "relative" }}>
                //       {/* Three Dots Icon */}
                //       <BsThreeDots
                //         onClick={togglePopup}
                //         className="post-Controll"
                //         style={{ cursor: "pointer" }}
                //       />

                //       {isPopupVisible && (
                //         <div className="popup-div">
                //           <div
                //             onClick={() => {
                //               navigate("/updatepost", { state: post._id });
                //             }}
                //             className="popup-menu-div edit"
                //           >
                //             Edit
                //           </div>
                //           <div className="popup-menu-div copylink">
                //             Copy Link
                //           </div>
                //           <div
                //             className="popup-menu-div hide"
                //             onClick={() => {}}
                //           >
                //             Hide Post
                //           </div>
                //           <div
                //             className="popup-menu-div delete"
                //             onClick={() => {
                //               deletePost(post._id);
                //             }}
                //             style={{color:"red"}}
                //           >
                //             Delete
                //           </div>
                //         </div>
                //       )}
                //     </div>
                //   </div>

                //   <div className="postBody-container">
                //     <div className="post-caption">
                //       {post.text && <p>{post.text}</p>}
                //     </div>
                //     {post.image && (
                //       <div className="post-photos">
                //         {post.image && <img src={post.image} alt="" />}
                //       </div>
                //     )}
                //     {post.video && (
                //       <div style={{ padding: "5px", height: "auto" }}>
                //         <video src={post.video} controls />
                //       </div>
                //     )}
                //   </div>

                //   <div className="post-interactions">
                //     <div>
                //       <BiLike className="post-interaction-icon" />
                //       <span>15</span>
                //     </div>
                //     <div>
                //       <FaRegCommentDots className="post-interaction-icon" />
                //       <span>30</span>
                //     </div>
                //     <div>
                //       <PiShareFatLight className="post-interaction-icon" />
                //       <span>12k</span>
                //     </div>
                //   </div>
                // </div>
                <MyPost/>
              );
            })}
        {/* ----------------------------- */}
        <WelcomeProfile user={user} />
      </div>
    );
  return <FetchingError />;
}

export default Profile;
