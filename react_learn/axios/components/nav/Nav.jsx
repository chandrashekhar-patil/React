import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav-container">
      <div className="left">Brilliantechsoft</div>
      <div className="right">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/all-products">All Products</Link>
        <Link to="/about">About</Link>
        <Link to="/usernames">UserNames</Link>

      </div>
    </div>
  );
}

export default Nav;
