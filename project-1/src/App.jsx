import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import ForgotPassword from "./components/forgotPass/Forgot";
import ResetPassword from "./components/reset/ResetPassword";
import CheckEmail from "./components/checkMail/CheckEmail";
import Navbar from "./components/dashboard/Navbar";

const AppContent = () => {
  const location = useLocation();
  
  // Define auth routes where Navbar should not appear
  const authRoutes = ["/login", "/register", "/forgot-pass", "/check-email", "/reset"];
  
  return (
    <>
      {!authRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} /> {/* Change from "/" to "/login" */}
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-pass" element={<ForgotPassword />} />
        <Route path="/check-email" element={<CheckEmail />} />
        <Route path="/reset" element={<ResetPassword />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
