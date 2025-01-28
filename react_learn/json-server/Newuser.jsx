import React from "react";

const Newuser = () => {
  return (
    <div style={{ padding: "50px" }}>
      <h2>Newuser</h2>
      <input type="text" placeholder="username" />
      <br />
      <br />
      <select>
        <option>Select City</option>
        <option>c1</option>
        <option>c2</option>
        <option>c3</option>
        <option>c4</option>
        <option>c5</option>
      </select>
      <br />
      <br />
      <button>New User</button>
    </div>
  );
};

export default Newuser;
