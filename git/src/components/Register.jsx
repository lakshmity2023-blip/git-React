import React from "react";

const Register = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>📝 Register Page</h1>

      <form>
        <div>
          <input
            type="text"
            placeholder="Enter Name"
            style={{ margin: "10px", padding: "10px", width: "250px" }}
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="Enter Email"
            style={{ margin: "10px", padding: "10px", width: "250px" }}
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Enter Password"
            style={{ margin: "10px", padding: "10px", width: "250px" }}
          />
        </div>

        <button
          type="submit"
          style={{ marginTop: "15px", padding: "10px 20px" }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;