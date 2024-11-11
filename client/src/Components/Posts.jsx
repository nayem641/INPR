import axios from "axios";
import { useEffect, useState } from "react";
import Post from "./Post"; 
import "./Styles/Post.css";
import HomeLoading from "./HomeLoading";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const getPosts = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://inpr.onrender.com/posts/");
      setPosts(response.data);
      setLoading(false);
    } catch (error) { 
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);
 
  return (
    <>
      {loading && (
        <div>
          <HomeLoading />
        </div>
      )}
      {!loading && posts.length === 0 && (
        <div className="emoji-container">
          <div className="sad-emoji">
            <div className="eyes">
              <div className="eye left"></div>
              <div className="eye right"></div>
            </div>
            <div className="mouth"></div>
            <div className="tear left-tear"></div>
            <div className="tear right-tear"></div>
          </div>
        </div>
      )}
      {posts &&
        posts
          .slice()
          .reverse()
          .map((post,index) => {
            return (
                <Post post={post} key={post._id}/>
            );
          })}
    </>
  );
}

export default Posts;
