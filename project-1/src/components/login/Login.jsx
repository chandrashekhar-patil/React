import React, { useState } from "react";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Login.module.css"; // ✅ Correct way for CSS Modules

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/v1/login",
        { username, password },
        { withCredentials: true }
      );
      alert("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.error || "Login failed!");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles["login-box"]}>
        <div className={styles["login-heading"]}>
          <h2>LOGIN</h2>
        </div>
        <form onSubmit={handleLogin}>
          <div className={styles["input-box"]}>
            <span className={styles.icon}>
              <FaUser />
            </span>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={styles["input-box"]}>
            <span className={styles.icon}>
              <FaLock />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className={styles["eye-icon"]}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div
            className={styles["forgot-pass"]}
            onClick={() => navigate("/forgot-pass")}
          >
            Forgot Password?
          </div>
          <div className={styles.btn}>
            <button type="submit">Login</button>
          </div>
          <div className={styles["register-link"]}>
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
