import React, { useState } from "react";
import { FaUser, FaLock, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("Registering with:", { name, email, password });

    try {
      const response = await fetch("http://localhost:5000/v1/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: name, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Registration successful!");
        navigate("/");
      } else {
        alert(data.error || "Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="register-box">
        <div className="register-heading">
          <h2>REGISTER</h2>
        </div>
        <form onSubmit={handleRegister}>
          <div className="input-box">
            <span className="icon">
              <FaUser />
            </span>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
            <span className="icon">
              <FaEnvelope />
            </span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
            <span className="icon">
              <FaLock />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className="btn">
            <button type="submit">Register</button>
          </div>
          <div className="login-link">
            <p>
              Already have an account?{" "}
              <span onClick={() => navigate("/")}>Login</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
