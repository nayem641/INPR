import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  // Inline styles for each element
  const pageStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
    background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
    color: "#333",
  };

  const emojiStyles = {
    fontSize: "4rem",
    animation: "float 3s ease-in-out infinite",
  };

  const titleStyles = {
    fontSize: "3rem",
    margin: "0.5rem 0",
    color: "#ff6b6b",
  };

  const messageStyles = {
    fontSize: "1.2rem",
    color: "#555",
    marginBottom: "2rem",
  };

  const buttonStyles = {
    padding: "0.7rem 1.5rem",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#5cb85c",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const handleButtonHover = (e) => {
    e.target.style.backgroundColor = "#4cae4c";
  };

  const handleButtonLeave = (e) => {
    e.target.style.backgroundColor = "#5cb85c";
  };

  return (
    <div style={pageStyles}>
      <div style={emojiStyles}>😢💔😱</div>
      <h1 style={titleStyles}>404 - Page Not Found</h1>
      <p style={messageStyles}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <button
        style={buttonStyles}
        onClick={() => navigate("/")}
        onMouseEnter={handleButtonHover}
        onMouseLeave={handleButtonLeave}
      >
        Go to Home
      </button>
    </div>
  );
};

export default NotFoundPage;
