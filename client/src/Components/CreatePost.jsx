import { useNavigate } from "react-router";
import "./Styles/CreatePost.css";
import { useEffect, useState } from "react";
import axios from "axios";

function CreatePost() {
  const [author,setAuthor]=useState({})
  const user_id = JSON.parse(localStorage.getItem("user_id"));
  const getAuthor = async () => {
    const response = await axios.get(`http://localhost:3000/users/${user_id}`);
    setAuthor(response.data.user)
  };
  useEffect(() => {getAuthor()}, []);
  const navigate = useNavigate();
  return (
    <div className="createPostContainer">
      {author ? (
        <img
          src={author?.profilePic}
          alt=""
          onClick={() => {
            navigate("/profile");
          }}
        />
      ) : (
        <img src="/user.png" />
      )}
      <input
        type="text"
        onClick={() => {
          navigate("/createpost");
        }}
        placeholder="Create your post here..."
      />

      <img
        className="photoinput"
        src="/photos.png"
        alt="/photos.png"
        onClick={() => {
          navigate("/createpost");
        }}
      />
    </div>
  );
}

export default CreatePost;
