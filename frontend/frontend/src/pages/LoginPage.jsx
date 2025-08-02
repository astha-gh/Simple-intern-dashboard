import React from 'react';
import {useNavigate} from 'react-router-dom';
import "../App.css";

function LoginPage() {
    const navigate = useNavigate();

    const handleSubmit = () => {
      navigate("/dashboard");
    };

    return (
      <div className="container">
        <h2>Intern DashBoard Login</h2>
        <input
          type="text"
          placeholder="Enter your Name"
          style={{
            padding: "0.6rem 1rem",
            fontSize: "1rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
            marginBottom: "1.2rem",
            width: "250px",
          }}
        />
        <br />
        <button onClick={handleSubmit}>Login</button>
      </div>
    );
}


export default LoginPage;