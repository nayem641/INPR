import "./Styles/Titlebar.css";


import { BsBoxArrowLeft } from "react-icons/bs";

import { IoSearchSharp } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { MdLiveHelp } from "react-icons/md";
import { RxAccessibility } from "react-icons/rx";
import { VscFeedback } from "react-icons/vsc";
import { MdHistoryEdu } from "react-icons/md";
import { useNavigate } from "react-router";

function MenuPopup() {

  const navigate=useNavigate()
  return (
    <div className="card-menu-wrap ">
      <div className="card-menu">
        <div
          className="profile-menu"
          onClick={() => {
            navigate("/profile");
          }}
        >
          <img src="/avatar1.png" alt="" />
          <p>Shahidur Rahman</p>
        </div>
        <div  className="card-menu-item" >
          <MdHistoryEdu className="item" />
          <p>INPR History</p>
        </div>
        <div  className="card-menu-item">
          <MdLiveHelp className="item" />
          <p>Help Center</p>
        </div>

        <div  className="card-menu-item">
          <VscFeedback className="item" />
          <p>Feedback</p>
        </div>
        {/* <div  className="card-menu-item">
          <RxAccessibility className="item" />
          <p>Accessibility </p>
        </div> */}
        <div  className="card-menu-item" onClick={()=>{navigate('/settings')}}>
          <IoSettingsSharp className="item" />
          <p>Settings</p>
        </div>
        <div  className="card-menu-item" onClick={()=>{
          localStorage.removeItem("user_id")
          navigate('/login')
        }}>
          <BsBoxArrowLeft className="item" />
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
}

const openMenuCard = () => {
  document.querySelector(".card-menu-wrap").classList.toggle("open-menu");
};

function Titlebar() {
  return (
    <div className="title-bar">
      {/* <img src="/facebook.png" alt="" /> */}

      <h1 className="gradient-text">InprBOOK</h1>
      <div className="titlebar-icon">
        {/* <IoSearchSharp
          className="search menu-icon"
        /> */}
        <AiOutlineMenu
          className="menu-icon"
          onClick={openMenuCard}
        />
      </div>
      <MenuPopup />
    </div>
  );
}

export default Titlebar;
