import "./Styles/Navigationbar.css";

// import { GoHomeFill } from "react-icons/go";
// import { FaCircleUser } from "react-icons/fa6";
// import { FaUserFriends } from "react-icons/fa";
// import { RiMessengerFill } from "react-icons/ri";
// import { PiVideoFill } from "react-icons/pi";
// import { BsBellFill } from "react-icons/bs";

import { MdOndemandVideo } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { GoHome } from "react-icons/go";
import { BsBell } from "react-icons/bs";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { FaRegUserCircle } from "react-icons/fa";


import { NavLink } from "react-router-dom";

function Navigationbar() {
  return (
    <div className="navigationMenau-conatiner">
      <div className="navIcon">
        <NavLink className="link"
          to={"/"}
          style={({ isActive }) => ({
            color: isActive ? "#0d6fb1" : "rgba(10, 10, 10,.8)",
          })}
        >
          <GoHome
            className="tab homeTab"
            style={({ isActive }) => ({
              color: isActive ? "#0d6fb1" : "rgba(10, 10, 10,.8)",
            })}
          />
        </NavLink>
      </div>

      <div className="navIcon">
        <NavLink className="link"
          to={"/users"}
          style={({ isActive }) => ({
            color: isActive ? "#0d6fb1" : "rgba(10, 10, 10,.8)",
          })}
        >
          <LiaUserFriendsSolid className="tab" />
        </NavLink>
      </div>

      <div className="navIcon">
        <NavLink className="link"
          to={"/messenger"}
          style={({ isActive }) => ({
            color: isActive ? "#0d6fb1" : "rgba(10, 10, 10,.8)",
          })}
        >
          <RiMessengerLine className="tab" />
        </NavLink>
      </div>

      <div className="navIcon">
        <NavLink className="link"
          to={"/videos"}
          style={({ isActive }) => ({
            color: isActive ? "#0d6fb1" : "rgba(10, 10, 10,.8)",
          })}
        >
          <MdOndemandVideo className="tab" />
        </NavLink>
      </div>

      <div className="navIcon">
        <NavLink className="link"
          to={"/notification"}
          style={({ isActive }) => ({
            color: isActive ? "#0d6fb1" : "rgba(10, 10, 10,.8)",
          })}
        >
          <BsBell className="tab" />
        </NavLink>
      </div>

      <div className="navIcon">
        <NavLink className="link"
          to={"/profile"}
          style={({ isActive }) => ({
            color: isActive ? "#0d6fb1" : "rgba(10, 10, 10,.8)",
          })}
        >
          <FaRegUserCircle className="tab" />
        </NavLink>
      </div>
    </div>
  );
}

export default Navigationbar;
