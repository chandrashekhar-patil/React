import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // ✅ Import axios
import "../Login/Login.css";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post(
        "http://localhost:5000/v1/forgot",
        { email }
      );

      console.log("Reset link sent to:", email);

      if (response.status === 200) {
        setMessage("Check your email for a reset link.");
        navigate("/check-email"); // ✅ Navigate after success
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
      <div className="login-box">
        <h2>Forgot Password</h2>
        <p>Enter your email address to receive a password reset link.</p>
        <form onSubmit={handleForgotPassword}> {/* ✅ Fixed function name */}
          <div className="input-box">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {message && <p className="message">{message}</p>} {/* ✅ Show response message */}
          <div className="btn">
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Reset Link"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
