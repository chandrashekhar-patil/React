import React from "react";
// import A from "./A";
import "./B.css";

const B = (props) => {
  return (
    <>
      {/* <A /> */}
      <div className="BC">
        <h2>B Component</h2>
        <p>Data : {props.info}</p>
      </div>
    </>
  );
};

export default B;
