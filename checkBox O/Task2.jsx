import { useState } from "react";

const Task2 = () => {
  const [check, setCheck] = useState([]);

  const haddleChange = (e) => {
    console.log(e.target.value, e.target.checked);
    if (e.target.checked) {
      setCheck([...check, e.target.value]);
    } else {
      setCheck([...check.filter((item) => item != e.target.value)]);
    }
  };
  return (
    <div
      style={{
        display: "block",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      <h2 style={{ padding: "6px", margin: "70px" }}>
        Check box operations :{" "}
      </h2>
      <label style={{ padding: "6px" }}>React.js</label>
      <input type="checkBox" onChange={haddleChange} value="React" />
      <br />
      <br />

      <label style={{ padding: "6px" }}>Vue.js</label>
      <input type="checkBox" onChange={haddleChange} value="Vue" />
      <br />
      <br />

      <label style={{ padding: "6px" }}>Next.js</label>
      <input type="checkBox" onChange={haddleChange} value="Next" />
      <br />
      <br />

      <label style={{ padding: "6px" }}>Node.js</label>
      <input type="checkBox" onChange={haddleChange} value="Node" />
      <br />
      <br />

      <h2>{check.join(" , ")}</h2>
    </div>
  );
};

export default Task2;
