import React, { useState } from "react";
import "./UserName.css";

const UserName = () => {
  const [names, setNames] = useState(["Raj", "Rohan", "Riya", "Sneha", "Piya"]);
  console.log(setNames);

  return (
    <div className="NameContainer">
      <h2>UserName</h2>
      <ul>
        {names.map((Name, index) => {
          return <li key={index}>{Name}</li>;
          
        })}
      </ul>
    </div>
  );
};

export default UserName;
