import React, { useState } from "react";
import B from "./B";
import "./A.css";
// import C from "./C.jsx";

const A = () => {
  let [state, setState] = useState("-----");
  return (
    <div className="AC">
      <h2>A Component</h2>
      <button
        onClick={() => {
          setState("Chandu");
        }}
      >
        Pass Data
      </button>
      <B info={state} />
    </div>
  );
};

export default A;
