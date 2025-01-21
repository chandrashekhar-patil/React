import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home/Home.jsx";
import Product from "./components/products/Product.jsx";
import Nav from "./components/nav/Nav.jsx";
import About from "./components/about/About.jsx";
import { Routes, Route } from "react-router-dom";
import Eletronics from "./components/products/categories/eletronics/Eletronics.jsx";
import Jewelery from "./components/products/categories/jewelery/Jewelery.jsx";
import MensC from "./components/products/categories/mensCloth/MensC.jsx";
import WomensC from "./components/products/categories/womensCloth/WomensC.jsx";
import PageNotFound from "./components/PageNotFound/PageNotFound.jsx";
import AllProduct from "./components/allproducts/AllProduct.jsx";
import UserName from "./components/usernames/UserName.jsx";

function App() {
  let Models = ["BMW", "TATA", "BBE", "RR", "Farari"];
  // let Models = [];
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />}>
          <Route path="eletronics" element={<Eletronics />} />
          <Route path="jewelary" element={<Jewelery />} />
          <Route path="men" element={<MensC />} />
          <Route path="women" element={<WomensC />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/all-products" element={<AllProduct />} />

        <Route path="jewelary" element={<Jewelery />} />
        <Route path="men" element={<MensC />} />
        <Route path="women" element={<WomensC />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/usernames" element={<UserName />} />

      </Routes>
      <div className="app">
        {/* <Home />
        <Product />
        <h1 className="head">This is list of Cars</h1>
        <ErrorMessage items={Models} />
        <FoodItems items={Models} />
        <About /> */}
      </div>
    </div>

    //ErrorMessag : array is empty is error msg to showing i have no car
    //FoodItems : array is showing the user list of cars.
  );
}
export default App;
