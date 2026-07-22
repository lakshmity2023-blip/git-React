import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>🏠 Home Page</h1>
      <h2>Welcome to My React App</h2>
      <p>Please Register to continue.</p>

      <Link to="/register">
        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Go to Register
        </button>
      </Link>
    </div>
  );
};

export default Home;