import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // ✅ Import axios
import "./Forgot.css";

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
      const response = await axios.post("http://localhost:5000/v1/forgot", {
        email,
      });

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
    <div className="forgot-container">
      <div className="forgot-box">
        <h2>Forgot Password</h2>
        <p>Enter your email address to receive a password reset link.</p>
        <form onSubmit={handleForgotPassword}>
          <div className="forgot-input-box">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {message && <p className="forgot-message">{message}</p>}
          <div className="forgot-btn">
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send"}
            </button>
            <div className="login-link">
              <p>
                Back to Login?{" "}
                <span onClick={() => navigate("/login")}>Login</span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
