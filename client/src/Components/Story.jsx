import React from "react";
import "./Styles/Story.css";
import { useNavigate } from "react-router";

function Story() {
  const navigate = useNavigate();
  const stories = [
    {
      id: 1,
      username: "John Doe",
      imageUrl: "https://picsum.photos/id/1/200/300",
    },
    {
      id: 2,
      username: "Jane Smith",
      imageUrl: "https://picsum.photos/id/1011/200/300",
    },
    {
      id: 3,
      username: "Mike Johnson",
      imageUrl: "https://picsum.photos/id/1012/200/300",
    },
    {
      id: 4,
      username: "Emily Brown",
      imageUrl: "https://picsum.photos/id/1027/200/300",
    },
    {
      id: 5,
      username: "Alex Wilson",
      imageUrl: "https://picsum.photos/id/1035/200/300",
    },
  ];

  return (
    <div className="story-container">
      <div className="story-list">
        <div
          style={{
            height: "auto",
            backgroundImage: `          linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), 

            url('/public/avatar1.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
          }}
          className="story-card add-story"
          onClick={() => {
            navigate("/createstory");
          }}
        >
          <p>Create Story</p> <div className="add-story-icon">+</div>
        </div>
        {stories.map((story) => (
          <div key={story.id} className="story-card">
            <img src={story.imageUrl} alt={`${story.username}'s story`} />
            <p>{story.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Story;
