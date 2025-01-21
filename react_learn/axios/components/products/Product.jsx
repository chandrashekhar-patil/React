import { Link, Outlet } from "react-router-dom";
import "./Product.css";

function Product() {
  return (
    <div style={{ color: "black", padding: "50px", textAlign: "center",}}>
      <h2 id="headingH" style={{ textAlign: "center", marginTop: "20px", color: "green" }}>
        Product Components
      </h2>
      <div className="productContainer">
        <div className="linksContainer">
          <Link
            to="eletronics"
            style={{ color: "white", textDecoration: "none", fontSize: "20px" }}
          >
            Eletronics
          </Link>
          <Link
            to="jewelary"
            style={{ color: "white", textDecoration: "none", fontSize: "20px" }}
          >
            Jewelery
          </Link>
          <Link
            to="men"
            style={{ color: "white", textDecoration: "none", fontSize: "20px" }}
          >
            Men's Cloth
          </Link>
          <Link
            to="women"
            style={{ color: "white", textDecoration: "none", fontSize: "20px" }}
          >
            Women's Cloth
          </Link>
        </div>
        <div className="componentsContainer">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Product;
