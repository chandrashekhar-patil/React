import React from "react";
// import A from "./A";
import "./B.css";
import C from "./C.jsx";

const B = ({ info }) => {
  return (
    <>
      {/* <A /> */}
      <div className="BC">
        <h2>B Component</h2>
        <p>Data : {info}</p>
        <C data={info} />
      </div>
    </>
  );
};

export default B;
