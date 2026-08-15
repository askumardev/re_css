import React from "react";
import { useNavigate } from "react-router-dom";
import { useRouteError } from "react-router-dom";


const Error = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  console.log(error);


  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>❌ 404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <button
        onClick={() => navigate("/")}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#ff9800",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Go Back Home
      </button>
    </div>
  );
};

export default Error;
