import { useNavigate } from "react-router";
import "./Styles/CreatePost.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaRegEdit } from "react-icons/fa";

function CreatePost() {
  const [author,setAuthor]=useState({})
  const user_id = JSON.parse(localStorage.getItem("user_id"));
  const getAuthor = async () => {
    const response = await axios.get(`https://inpr.onrender.com/users/${user_id}`);
    setAuthor(response.data.user)
  };
  useEffect(() => {getAuthor()}, []);
  const navigate = useNavigate();
  return (
    <div className="createPostContainer">
      <img
        src={author?.profilePic}
        alt="/user.png"
        onClick={() => {
          navigate("/profile");
        }}
      />

      <input
        type="text"
        onClick={() => {
          navigate("/createpost");
        }}
        placeholder="Create your post here..."
      />

      <FaRegEdit style={{ fontSize: "30px", color: "rgba(0,0,0,.6)" }} />
    </div>
  );
}

export default CreatePost;
