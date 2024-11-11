import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const Login = () => {
  //-------state for login form-------
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    //------Client side validation-------
    if (!email || !password || password === "" || email === "") {
      console.log("Please fill all fields");
    }
    //------send LOGIN  request to server-------
    fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          localStorage.setItem("user_id", JSON.stringify(data.loggedInUser.id));
          navigate("/profile");
          toast.success(data.message);
        } else {
          toast.error(data.message);
          localStorage.removeItem("user_id")
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  //---------rendering form for login-------
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        // background:"whitesmoke"
      }}
    >
      <div
        style={{
          padding: "20px",
          borderRadius: "10px",
          background: "white",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
          transition: "box-shadow 0.3s ease-in-out",
          height: "auto",
          width: "90%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "20px 0",

          // margin:"30px 0px"
        }}
      >
        <img
          src="/login.jpeg"
          alt="Login"
          style={{
            width: "260px",
            borderRadius: "5px",
            margin: "10px",
          }}
        />
        <form
          className="login-form"
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "270px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "24px",
              fontWeight: "bold",
              color: "darkblue",
              textTransform: "uppercase",
              letterSpacing: "1px",
              marginBottom: "10px",
            }}
          >
            Login{" "}
            <span
              style={{
                background:
                  "linear-gradient(to right, #ff7e5f, #feb47b, #86a8e7, #7f7fd5, #b06ab3)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              INPR
            </span>
          </h2>
          <div
            className="input-group"
            style={{
              position: "relative",
              width: "100%",
            }}
          >
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                paddingLeft: "35px",
                border: "2px solid #007bff",
                borderRadius: "8px",
                fontSize: "16px",
                transition: "all 0.3s ease",
                outline: "none",
              }}
            />
            <span
              style={{
                position: "absolute",
                left: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#007bff",
              }}
            >
              <FaEnvelope />
            </span>
          </div>
          <div
            className="input-group"
            style={{
              position: "relative",
              width: "100%",
            }}
          >
            <input
              type="password"
              placeholder="Password "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                paddingLeft: "35px",
                border: "2px solid #007bff",
                borderRadius: "8px",
                fontSize: "16px",
                transition: "all 0.3s ease",
                outline: "none",
              }}
            />
            <span
              style={{
                position: "absolute",
                left: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#007bff",
              }}
            >
              <FaLock />
            </span>
          </div>
          <Link
            to={"/"}
            style={{
              textAlign: "right",
              color: "#007bff",
              textDecoration: "none",
              fontSize: "15px",
              // marginTop: "10px",
            }}
          >
            Forgot Password?
          </Link>
          <button
            onClick={handleSubmit}
            style={{
              width: "100%",
              padding: "10px 12px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "22px",
              fontWeight: "bold",
              transition: "background 0.3s ease, color 0.3s ease",
              marginBottom: "20px",
              backgroundColor: "#007bff",
              color: "white",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "#004aff";
              e.target.style.color = "#f2f0f9";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "#007bff";
              e.target.style.color = "white";
            }}
          >
            Login
          </button>
        </form>
        <span>
          Click here to{" "}
          <Link
            to="/signup"
            style={{ color: "blue", fontweight: "bold", fontSize: "18px" }}
          >
            SignUp
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
