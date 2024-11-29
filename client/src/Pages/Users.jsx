import { FaSearch } from "react-icons/fa";
import Navigationbar from "../Components/Navigationbar";
import "./Styles/Users.css";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
function Users() {
    const profileSkeletons = new Array(5).fill(null);

  const [users,setUsers] = useState([]);
  useEffect(()=>{
    fetch("https://inpr.onrender.com/users")
     .then(res=>res.json())
     .then((data)=>{
       setUsers(data)
       
     })
     .catch(error=>console.log(error))
  },[])
  return (
    <div className="friends-page-container">
      {/* <Titlebar /> */}
      <Navigationbar />
      <div className="friend-search-container">
        <div className="titlediv">Friends</div>
        <div className="titlediv">
          <FaSearch className="search-icon" />
        </div>
      </div>
      <div className="friends-sorting">
        <button className="suggestion">Suggestions</button>
        <button className="my-friends"> Friends</button>
      </div>
      <div className="friends-requiest">
        <div className="requests-title">
          <div>
            <h3
              style={{
                marginLeft: "15px",
                color: "gray",
                fontWeight: "normal",
              }}
            >
              Friend requests
            </h3>
          </div>
          <div>
            <Link>See all</Link>
          </div>
        </div>
        <div className="request-item">
          <div>
            <img src="/avatar6.png" alt="" />
          </div>
          <div className="request-info">
            <div className="request-header">
              <div style={{ marginLeft: "22px", fontWeight: "normal" }}>
                Shahidur Rahman
              </div>
            </div>
            <div className="request-activity">
              <button>Confirm</button>
              <button>Delete</button>
            </div>
          </div>
        </div>
      </div>

      {/* Suggestion firends */}

      <div style={{ fontSize: "16px", padding: "5px 0" }}>
        <h3 style={{ marginLeft: "15px", color: "gray", fontWeight: "normal" }}>
          Friends you may know
        </h3>
      </div>
      {users.length > 0 &&
        users.map((user) => {
          return (
            <div
              key={user._id}
              className="request-item"
              style={{ boxShadow: "none" }}
            >
              <div>
                <img src="/user.png" alt="" />
              </div>
              <div className="request-info">
                <div className="request-header">
                  <p>{`${user.firstName} ${user.lastName}`}</p>
                </div>
                <div className="request-activity">
                  <button>Request</button>
                  <button>Remove</button>
                </div>
              </div>
            </div>
          );
        })}
      {users.length === 0 && (
        <div
          style={{
            width: "100vw",
            padding: "5px 15px",
            background: "#fff",
            boxSizing: "border-box",
          }}
        >
          {profileSkeletons.map((_, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                height: "80px",
                marginBottom: "15px", // Add some space between profiles
              }}
            >
              {/* Profile Image (Left Side) */}
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  backgroundColor: "#e0e0e0",
                  background:
                    "linear-gradient(90deg, #e0e0e0 25%, #f7f7f7 50%, #e0e0e0 75%)",
                  backgroundSize: "200% 100%",
                  animation: "shimmer 1.5s infinite linear",
                }}
              ></div>

              {/* Profile Name & Buttons Section (Right Side) */}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  marginLeft: "15px", // Adds space between the image and text
                }}
              >
                {/* Profile Name Skeleton */}
                <div
                  style={{
                    height: "15px",
                    backgroundColor: "#e0e0e0",
                    borderRadius: "4px",
                    width: "95%",
                    marginBottom: "15px",
                    background:
                      "linear-gradient(90deg, #e0e0e0 25%, #f7f7f7 50%, #e0e0e0 75%)",
                    backgroundSize: "200% 100%",
                    animation: "shimmer 1.5s infinite linear",
                  }}
                ></div>

                {/* Buttons Section (below the profile name) */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <div
                    style={{
                      marginRight: "15px",
                      height: "15px",
                      width: "35%",
                      backgroundColor: "#e0e0e0",
                      borderRadius: "4px",
                      background:
                        "linear-gradient(90deg, #e0e0e0 25%, #f7f7f7 50%, #e0e0e0 75%)",
                      backgroundSize: "200% 100%",
                      animation: "shimmer 1.5s infinite linear",
                    }}
                  ></div>
                  <div
                    style={{
                      marginRight: "15px",
                      height: "15px",
                      width: "35%",
                      backgroundColor: "#e0e0e0",
                      borderRadius: "4px",
                      background:
                        "linear-gradient(90deg, #e0e0e0 25%, #f7f7f7 50%, #e0e0e0 75%)",
                      backgroundSize: "200% 100%",
                      animation: "shimmer 1.5s infinite linear",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}

          {/* Shimmer Keyframes animation in JS */}
          <style>
            {`
          @keyframes shimmer {
            0% {
              background-position: -200px 0;
            }
            100% {
              background-position: 200px 0;
            }
          }
        `}
          </style>
        </div>
      )}

      <hr />
    </div>
  );
}

export default Users;
