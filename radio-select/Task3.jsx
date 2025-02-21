import React, { useState } from "react";

const Task3 = () => {
  const [gender, setGander] = useState("");
  const [city, setCity] = useState("");
  return (
    <div>
      <div
        style={{
          margin: "50px",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h3 style={{ marginRight: "20px" }}>Select Gender</h3>
        <input
          type="radio"
          checked={gender === "Male"}
          name="gender"
          id="Male"
          value="Male"
          onChange={(e) => setGander(e.target.value)}
        />
        <label style={{ marginRight: "20px" }} htmlFor="male">
          Male
        </label>
        <input
          type="radio"
          checked={gender === "Female"}
          name="gender"
          onChange={(e) => setGander(e.target.value)}
          id="Female"
          value="Female"
        />
        <label htmlFor="female">Female</label>
        <br />
      </div>
      <h3
        style={{
          margin: "50px",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        Selected Gender : {gender}
      </h3>

      <select
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          marginLeft: "660px",
        }}
        value={city}
        onChange={(e) => setCity(e.target.value)}
      >
        <option>Select city</option>
        <option>Pune</option>
        <option>Mumbai</option>
        <option>Delhi</option>
        <option>Goa</option>
      </select>

      <h2>Seleted City : {city}</h2>
    </div>
  );
};

export default Task3;
