import React, { useState } from "react";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import MessageIcon from "@mui/icons-material/Message";
import GroupIcon from "@mui/icons-material/Group";
import PeopleIcon from "@mui/icons-material/People";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PageviewIcon from "@mui/icons-material/Pageview";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EventIcon from "@mui/icons-material/Event";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import AssessmentIcon from "@mui/icons-material/Assessment";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import { IoMdArrowRoundBack } from "react-icons/io";

import { FaUsers } from "react-icons/fa6";

import { IoSearch } from "react-icons/io5";
import { RiDropdownList } from "react-icons/ri";

import {
  FaCog,
  FaQuestionCircle,
  FaRegMoon,
  FaLanguage,
  FaWhatsapp,
  FaSignOutAlt,
} from "react-icons/fa";
import {
  MdPayment,
  MdInbox,
  MdInfoOutline,
  MdReportProblem,
} from "react-icons/md";
import "./Styles/Settings.css";
import { useNavigate } from "react-router";

function Settings() {
  const navigate=useNavigate()
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className={`app ${isDarkMode ? "dark-mode" : ""}`}>
      {/* Header Section */}
      <div className="app__header">
        <button className="back-button" onClick={()=>{navigate('/profile')}}>
          <IoMdArrowRoundBack/>
        </button>
        <h2>Menu</h2>
        <button className="search-button">
          <IoSearch />
        </button>
      </div>

      {/* Profile Section */}
      <div className="app__profile">
        <img
          src="/public/avatar1.png"
          alt="Profile"
          className="profile-image"
        />
        <div className="profile-info">
          <span className="profile-name">Shahidur Rahman</span>
          <button className="profile-dropdown">
            <RiDropdownList className="dropdown" />
          </button>
        </div>
      </div>

      <div className="create-profile-button">
        <button>+ Create another profile</button>
      </div>

      {/* Main Menu Section */}
      <div className="app__menu">
        <MenuItem icon={<VideoLibraryIcon />} title="Reels" onClick={()=>{alert()}}/>
        <MenuItem icon={<MessageIcon />} title="Messages" />
        <MenuItem icon={<FaUsers />} title="Groups" />
        <MenuItem icon={<PeopleIcon />} title="Friends" />
        <MenuItem icon={<PlayCircleFilledIcon />} title="Video" />
        <MenuItem icon={<ShoppingCartIcon />} title="Marketplace" />
        <MenuItem icon={<PageviewIcon />} title="Pages" />
        <MenuItem icon={<BookmarkIcon />} title="Saved" />
        <MenuItem icon={<AccessTimeIcon />} title="Memories" />
        <MenuItem icon={<EventIcon />} title="Events" />
        <MenuItem icon={<SportsEsportsIcon />} title="Games" />
        <MenuItem icon={<AssessmentIcon />} title="Ads Manager" />
        <MenuItem icon={<RssFeedIcon />} title="Feeds" />
      </div>

      {/* Settings and Support Section */}
      <div className="app__settings">
        <MenuItem icon={<FaCog />} title="Settings" />
        <MenuItem icon={<MdPayment />} title="Orders and payments" />
        <MenuItem icon={<FaRegMoon />} title="Dark mode">
          <ToggleButton isChecked={isDarkMode} onToggle={toggleDarkMode} />
        </MenuItem>
        <MenuItem icon={<FaLanguage />} title="Language" />

        <div className="section-header">Help & support</div>
        <MenuItem icon={<FaQuestionCircle />} title="Help" />
        <MenuItem icon={<MdInbox />} title="Support Inbox" />
        <MenuItem icon={<MdInfoOutline />} title="About" />
        <MenuItem icon={<MdReportProblem />} title="Report a problem" />

        <div className="section-header">Also From Meta</div>
        <MenuItem icon={<FaWhatsapp />} title="WhatsApp" />
        <MenuItem icon={<FaSignOutAlt />} title="Log out" />
      </div>
    </div>
  );
}

// Menu Item Component
function MenuItem({ icon, title, children }) {
  return (
    <div className="menu-item">
      <span className="menu-item__icon">{icon}</span>
      <span className="menu-item__title">{title}</span>
      {children}
    </div>
  );
}

// Toggle Button Component
function ToggleButton({ isChecked, onToggle }) {
  return (
    <div className="toggle-button" onClick={onToggle}>
      <div className={`toggle-thumb ${isChecked ? "on" : ""}`} />
    </div>
  );
}

export default Settings;
