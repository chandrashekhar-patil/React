import React, { useState } from "react";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const res = await axios.post("http://localhost:5000/v1/login", 
        { username, password }, 
        { withCredentials: true } // ✅ Sends & receives cookies
      );
  
      alert("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.error || "Login failed!");
    }
  };
  

  return (
    <div className="container">
      <div className="login-box">
        <div className="login-heading">
          <h2>LOGIN</h2>
        </div>
        <form onSubmit={handleLogin}>
          <div className="input-box">
            <span className="icon">
              <FaUser />
            </span>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
            />
            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className="forgot-pass">
            <span onClick={() => navigate("/forgot-pass")}>Forgot Password?</span>
          </div>
          <div className="btn">
            <button type="submit">Login</button>
          </div>
          <div className="register-link">
            <p>
              Don't have an account?{" "}
              <span onClick={() => navigate("/register")}>Register</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
