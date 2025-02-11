import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "../Login/Login.css"; // Reusing login styles

function CheckEmail() {
  return (
    <div className="container">
      <div className="login-box">
        <h2>Check Your Email</h2>
        <p>
          A password reset link has been sent to your email. Please check your
          inbox and follow the instructions.
        </p>
        <FontAwesomeIcon icon={faEnvelopeCircleCheck} size="3x" className="icon" />
        <p>Didn't receive the email?</p>
        <Link to="/forgot-pass" className="forgot-pass">
          Try again
        </Link>
      </div>
    </div>
  );
}

export default CheckEmail;
