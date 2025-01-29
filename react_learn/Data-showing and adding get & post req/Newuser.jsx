import axios from "axios";
import React, { useState } from "react";

const Newuser = ({ getUsers }) => {
  const [newuser, setNewUser] = useState({
    name: "",
    city: "",
  });

  const getNewUser = () => {
    axios
      .post("http://localhost:3000/result", newuser)
      .then((res) => {
        console.log("success", res);
        // alert("User is Created!");
        getUsers(); // Fetch the updated list of users after adding a new one
        setNewUser({ name: "", city: "" }); // Optionally reset the form
      })
      .catch((e) => {
        alert("User not created!");
        console.log(e);
      });
  };

  return (
    <div style={{ padding: "50px" }}>
      <h2>Newuser</h2>
      <input
        onChange={(e) => {
          setNewUser({ ...newuser, name: e.target.value });
        }}
        type="text"
        placeholder="username"
      />
      <br />
      <br />
      <select
        onChange={(e) => {
          setNewUser({ ...newuser, city: e.target.value });
        }}
      >
        <option>Select City</option>
        <option>London</option>
        <option>Tokyo</option>
        <option>Paris</option>
        <option>Mumbai</option>
        <option>Sydney</option>
        <option>Dubai</option>
        <option>Toronto</option>
      </select>
      <br />
      <br />
      <button
        style={{
          padding: "8px 20px",
          cursor: "pointer",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "4px",
        }}
        onClick={getNewUser}
      >
        Add
      </button>
    </div>
  );
};

export default Newuser;
