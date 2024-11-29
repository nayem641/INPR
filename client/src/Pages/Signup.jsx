import { useState } from "react";
import { Link } from "react-router-dom";
import "./Styles/Signup.css";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaTint,
  FaBriefcase,
  FaPhone,
  FaBirthdayCake,
  FaVenusMars,
  FaCheck,
} from "react-icons/fa";
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import styles from "./SignupStyles";

const Signup = () => {
  const [step, setStep] = useState(0);

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <>
            <h1
              style={{
                marginBottom: "20px",
                background:
                  "linear-gradient(to right, #ff7e5f, #feb47b, #86a8e7, #7f7fd5, #b06ab3)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Join INPR
            </h1>
            <div style={{ ...styles.step, justifyContent: "center" }}>
              <img
                src="/signup.png"
                alt="/desktop.png"
                style={{ ...styles.image, width: "300px", height: "auto" }}
              />
              <button
                onClick={() => setStep(step + 1)}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  background: "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "22px",
                  transition: "background 0.3s ease, color 0.3s ease",
                  marginBottom: "20px",
                }}
              >
                Let's Start
              </button>
              <span style={{ fontSize: "18px", color: "gray" }}>
                Have an account?
                <Link
                  to={"/login"}
                  style={{
                    color: "#007bff",
                    fontSize: "20px",
                    marginLeft: "10px",
                  }}
                >
                  Login
                </Link>
              </span>
            </div>
          </>
        );
      case 1:
        return (
          <>
            <div style={styles.step}>
              <div style={styles.stepIndicator}>
                <div style={styles.stepNumber}>1</div>
                <FaCheck style={styles.checkIcon} />
              </div>
              <div style={styles.inputContainer}>
                <FaUser style={styles.icon} />
                <input
                  type="text"
                  placeholder="First Name"
                  style={styles.input}
                />
              </div>
              <div style={styles.inputContainer}>
                <FaUser style={styles.icon} />
                <input
                  type="text"
                  placeholder="Last Name"
                  style={styles.input}
                />
              </div>
              <div style={styles.inputContainer}>
                <FaBriefcase style={styles.icon} />
                <input
                  type="text"
                  placeholder="Occupation"
                  style={styles.input}
                />
              </div>

              <div className="step-btn-conatiner">
                <span onClick={() => setStep(step - 1)}>Back</span>
                <span onClick={() => setStep(step + 1)}>Next</span>
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div style={styles.step}>
              <div style={styles.stepIndicator}>
                <div style={styles.stepNumber}>2</div>
                <FaCheck style={styles.checkIcon} />
              </div>
              <div style={styles.inputContainer}>
                <FaEnvelope style={styles.icon} />
                <input type="email" placeholder="Email" style={styles.input} />
              </div>
              <div style={styles.inputContainer}>
                <FaPhone style={styles.icon} />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  style={styles.input}
                />
              </div>
              <div style={styles.inputContainer}>
                <FaLock style={styles.icon} />
                <input
                  type="password"
                  placeholder="Password"
                  style={styles.input}
                />
              </div>
              <div className="step-btn-conatiner">
                <span onClick={() => setStep(step - 1)}>Back</span>
                <span onClick={() => setStep(step + 1)}>Next</span>
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div style={styles.step}>
              <div style={styles.stepIndicator}>
                <div style={styles.stepNumber}>3</div>
                <FaCheck style={styles.checkIcon} />
              </div>

              <div style={styles.inputContainer}>
                <FaBirthdayCake style={styles.icon} />
                <input
                  type="date"
                  placeholder="Date of Birth"
                  style={styles.input}
                />
              </div>

              <div style={styles.inputContainer}>
                <FaTint style={styles.icon} />
                <select style={styles.input}>
                  <option value="">Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>

              <div style={styles.inputContainer}>
                <FaVenusMars style={styles.icon} />
                <select style={styles.input}>
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="step-btn-conatiner">
                <span onClick={() => setStep(step - 1)}>Back</span>
                <span onClick={() => setStep(step + 1)}>Next</span>
              </div>
            </div>
          </>
        );
      case 4:
        return (
          <div>
            <h3>Touch to choose photo</h3>
            <label htmlFor="profilePic">
              <div
                htmlFor="profilePic"
                className="pppreview"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "75vw",
                  margin: "15px auto",
                  padding: "10px",
                  backgroundColor: "rgba(0,0,0,.15)",
                  borderRadius: "5px",
                }}
              >
                <img
                  src="/placeholder.webp"
                  height={"120px"}
                  alt="Profile Placeholder"
                />
              </div>
            </label>

            <div style={styles.inputContainer}>
              <input
                placeholder="Choose Photo"
                type="file"
                name="profilePic"
                id="profilePic"
                style={{ display: "none" }}
              />
            </div>

            <div className="step-btn-conatiner">
              <span
                onClick={() => setStep(step - 1)}
                style={{ marginLeft: "0px" }}
              >
                Back
              </span>
              <button className="submitButton" style={styles.button}>
                SUBMIT
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div  
      style={{
        backgroundColor: "#f0f2f5",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={styles.form}>
        <div style={step < 5 ? styles.progressBar : styles.progress}>
          <div
            style={{ ...styles.progress, width: `${(step / 4) * 100}%` }}
          ></div>
        </div>
        {renderStep()}
      </div>
    </div>
  );
};

export default Signup;
