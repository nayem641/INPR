import React from "react";
import "./Styles/SkeletonLoader.css"; // Import the CSS styles

const SkeletonLoader = () => {
  return (
    <div className="profile-skeleton-loader">
      <div className="skeleton-cover-photo"></div>
      <div className="skeleton-profile-pic"></div>
      <div className="skeleton-info">
        <div className="skeleton-name"></div>
        <div className="skeleton-bio"></div>
        <div className="skeleton-details">
          <div className="skeleton-detail-item"></div>
          <div className="skeleton-detail-item"></div>
          <div className="skeleton-detail-item"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
