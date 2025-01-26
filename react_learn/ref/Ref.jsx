import React, { useState } from "react";
import "./Ref.css";

const Ref = () => {
  let [state, setState] = useState(null);
  let [data, setData] = useState(null);

  let value; //undefined destroyed 500  re-reated -undefined

  const upstateState = () => {
    setState(100);
  };

  const updateData = () => {
    setData(1000);
  };
  const displayValue = () => {
    console.log("State : " + state);
    console.log("Data : " + data);
    console.log("Value : " + value);
  };

  const updateValue = () => {
    value = 500;
  };

  return (
    <div className="refContainer">
      <h2>Ref Component: {state}</h2>

      <button onClick={upstateState}>Update State</button>

      <button onClick={updateData}>Update Data</button>

      <button onClick={updateValue}>Update Value</button>

      <button onClick={displayValue}>Display</button>
    </div>
  );
};

export default Ref;
