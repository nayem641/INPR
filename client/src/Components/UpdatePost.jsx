import "../Pages/Styles/CretatePostPage.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

function UpdatePost() {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [updating, setUpdating] = useState(false);
  const [loadingPost, setLoadingPost] = useState(true);
  // const [authorPp, setAuthorPp] = useState('')
  // const [authorId, setAuthorId] =useState('')
  // const [authorName, setAuthorName] = useState('')
  const location = useLocation();
  const post_id = location.state;
 
  //////--------Retrieving data from Database----------////////
  const getUpdateAblePost = async () => {
    setLoadingPost(true);
    const response = await axios.get(`http://localhost:3000/posts/${post_id}`);
    setText(response.data.text);
 
    setLoadingPost(false);

  };

  useEffect(() => {
    getUpdateAblePost();
  }, []);

  //////----------Now update the post---------------///////

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    try {
      setUpdating(true);
      const postObject = { text };
      const response = await axios.put(
        `http://localhost:3000/posts/${post_id}`,
        postObject
      );
      setUpdating(false);
      // console.log(response);
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
          <span>Update Post</span>
          <span>
            <button
              onClick={handlePostSubmit}
              style={{
                color: updating || !text ? "gray" : "#007bff",
              }}
            >
              save
            </button>
          </span>
        </div>
        <div className="poster">
          <img src="/avatar1.png" alt="" />
          <span>Shahidur Rahman</span>
        </div>
        <div className="input-area">
          {!updating && (
            <textarea
              placeholder="What's on your mind?"
              value={text} // Bind to 'text' state
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          )}

          {updating && (
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

          <div className="attachment-inputs">
            <button
              disabled={updating}
              onClick={handlePostSubmit}
              style={{
                margin: "10px auto",
                width: "90%",
                borderRadius: "10px",
                fontSize: "20px",
                padding: "8px 0px",
                border: "none",
                backgroundColor: !text ? "gray" : "#007bff",
                color: "white",
                cursor: "pointer",
                fontWeight: "bold",
                boxShadow: "0px 4px 6px rgba(0,0,0,.2)",
              }}
            >
              {updating ? "UPDATING..." : "SAVE"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdatePost;
