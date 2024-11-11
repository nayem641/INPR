import React from "react";
import "./Styles/HomeLoading.css";

const HomeLoading = () => {
  return (
    <div className="skeleton-container">
      <div className="skeleton-header">
        <div className="skeleton-profile">
          <div className="skeleton-profile-image" />
          <div className="skeleton-profile-info">
            <div className="skeleton-profile-name" />
            <div className="skeleton-post-date" />
          </div>
        </div>
      </div>
      <div className="skeleton-caption">
        <div className="skeleton-caption-line" />
        <div className="skeleton-caption-line short" />
      </div>
      <div className="skeleton-image" />
      <div className="skeleton-footer">
        <div className="skeleton-action">
          <div className="skeleton-button like" />
          <div className="skeleton-button comment" />
          <div className="skeleton-button share" />
        </div>
      </div>
    </div>
  );
};

export default HomeLoading;
