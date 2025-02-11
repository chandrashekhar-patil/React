import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ForgotPassword from "./components/ForgotPass/Forgot";
import ResetPassword from "./components/Reset/ResetPassword";
import CheckEmail from "./components/checkMail/CheckEmail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-pass" element={<ForgotPassword />} />
        <Route path="/check-email" element={<CheckEmail />} /> {/* New Route */}
        <Route path="/reset" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
