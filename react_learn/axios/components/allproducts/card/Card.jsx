import "./Card.css";
import React from "react";

const Card = ({ image, title, price }) => {
  return (
    <div className="card">
      <img src={image} alt={title} width="100%" height={200} />
      <h6>{title}</h6>
      <p>${price}</p>
      <button>Show More Details</button>
    </div>
  );
};

export default Card;
