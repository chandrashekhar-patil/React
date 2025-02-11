import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import "./ResetPassword.css";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token"); // Get token from URL

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!token) {
      setMessage("Invalid or expired reset link.");
    }
  }, [token]);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (newPassword.length < 6) {
      setMessage("Password must be at least 6 characters.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post("http://localhost:5000/v1/reset", {
        token,
        new_password: newPassword,
      });

      if (response.status === 200) {
        setMessage("Password updated successfully! Redirecting...");
        setTimeout(() => navigate("/"), 3000);
      } else {
        setMessage(response.data.error || "Something went wrong.");
      }
    } catch (error) {
      setMessage(error.response?.data?.error || "Server error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="reset-box">
        <div className="login-heading">
          <h2>Reset Password</h2>
        </div>
        <form onSubmit={handleResetPassword}>
          <div className="input-box">
            <input
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="reset-input-box">
            <input
              type="password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {message && <p className="message">{message}</p>}
          <div className="btn">
            <button type="submit" disabled={loading || !token}>
              {loading ? "Updating..." : "Update Password"}
            </button>
            <p className="redirect">
              <span onClick={() => navigate("/")}>Back to Login</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
