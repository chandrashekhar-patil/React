import axios from "axios";
import React, { useState } from "react";
import "./AllProduct.css";
import Card from "./card/card";

const AllProduct = () => {
  const [allproducts, setAllProducts] = useState([]);

  const getProducts = () => {
    axios
      .get("https://fakestoreapi.com/products") // Fixed the extra space in URL
      .then((res) => {
        console.log("then");
        console.log(res.data);
        setAllProducts(res.data);
      })
      .catch((error) => {
        console.log("error");
        console.log(error);
      });
  };

  return (
    <div
      style={{
        padding: "50px",
      }}
    >
      <h2>All Products</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nobis
        quo velit quis qui minima. Unde quidem modi minima reprehenderit
        praesentium nam quasi eos exercitationem dolore id velit quia sed totam
        repellat adipisci voluptate similique expedita odit, consectetur commodi
        esse autem. Voluptates nulla, blanditiis dolore tempora ipsa nostrum quo
        voluptatum tenetur ullam quibusdam dolores laudantium neque, error quam
        nobis sit quod quaerat obcaecati. Placeat possimus nihil accusamus ad
        fuga unde, libero dolor adipisci porro aut deleniti voluptate mollitia,
        error vitae quod, nisi neque a ullam expedita sed sit. Corrupti,
        laudantium tempore. Facilis magnam beatae officia, corrupti repellat
        perferendis. Accusamus, pariatur!
      </p>
      <button onClick={getProducts}>Get Products</button>
      <div className="allProductsData">
        {allproducts.map((element, index) => {
          return (
            <Card
              key={index}
              image={element.image}
              title={element.title}
              price={element.price}
            />
          );
        })}
      </div>
    </div>
  );
};


export default AllProduct;
