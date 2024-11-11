import React from 'react'

function WelcomeProfile({user}) {
  return (
    
        <div
          style={{
            padding: "30px",
            background: "linear-gradient(135deg, #f9a8d4, #5ccbf1)",
            borderRadius: " 20px",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            color: "#ffffff",
          }}
        >
          <img
            src={user.profilePic}
            alt={`${user.firstName}'s profile`}
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              border: "4px solid #fff",
              marginBottom: "15px",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
            }}
          />
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginBottom: "10px",
              color: "#ffffff",
            }}
          >
            🎉 Welcome 🎉 {user.firstName + " " + user.lastName}!
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#f1f1f1",
              marginBottom: "25px",
            }}
          >
            Joined on: <strong>5 November,2024</strong>
          </p>
          
          <style>
            {`
          @keyframes glow {
            from { box-shadow: 0 0 10px #ffde59; }
            to { box-shadow: 0 0 20px #ffde59, 0 0 30px #ffbb00; }
          }
        `}
          </style>
        </div>
  )
}

export default WelcomeProfile