import React from "react";
import myfirstContext from "./context.js";
import B from "./B.jsx";
const A = () => {
  return (
    <div style={{ padding: "50px" }}>
      <h2>A Component</h2>
      <button>Submit</button>
      <br />
      <hr />
      <myfirstContext.Provider value={10} />
      {/* </myfirstContext.Provider> */}
    </div>
  );
};

export default A;
