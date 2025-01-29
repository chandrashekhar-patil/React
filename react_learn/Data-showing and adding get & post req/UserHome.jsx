import React from "react";
import Newuser from "./Newuser";
import Users from "./Users";
import { useState } from "react";
import axios from "axios";

const UserHome = () => {
  const [users, setUsers] = useState([]);
  console.log(users);

  const getUsers = () => {
    axios
      .get("http://localhost:3000/result") // GET request to fetch users
      .then((res) => {
        setUsers(res.data); // Setting the fetched users to state
      })
      .catch((error) => {
        console.log("Something went wrong!", error); // Log error if the request fails
      });
  };

  return (
    <div>
      <h2>User Home Component</h2>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Newuser getUsers={getUsers} />
        <Users getUser={getUsers} users={users} />
      </div>
    </div>
  );
};
export default UserHome;
