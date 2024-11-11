import React from "react";
import "./Popup.css";
const Popup = ({ message, onClose }) => {
  if (!message) return null;

  const errorList = message.split("\n");

  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2>⚠️⚠️⚠️</h2>
        <hr />
        <h2> Check again</h2>
        <ul className="error-list">
          {errorList.map((error, index) => (
            <li key={index} className="error-item">
              {error}
            </li>
          ))}
        </ul>
        <hr />
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

export default Popup;


