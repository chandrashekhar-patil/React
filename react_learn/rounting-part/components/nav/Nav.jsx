import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav-container">
      <div className="left">Brilliantechsoft</div>
      <div className="right">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cars">Cars</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}

export default Nav;
