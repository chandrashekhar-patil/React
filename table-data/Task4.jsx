import React from "react";

const Task4 = () => {
  const Data = [
    {
      id: 1,
      name: "amit",
      email: "amit@gmail.com",
      phone: 8191991191,
    },
    {
      id: 2,
      name: "akshay",
      email: "akshay@gmail.com",
      phone: 8191627911,
    },
    {
      id: 3,
      name: "kiran",
      email: "kiran@gmail.com",
      phone: 8891991191,
    },
    {
      id: 4,
      name: "nitin",
      email: "nitin@gmail.com",
      phone: 9999011191,
    },
  ];
  return (
    <div>
      <h2>Table data uisng the map function</h2>
      <table
        style={{
          borderCollapse: "collapse",
          width: "50%",
          marginTop: "20px",
        }}
        border="1"
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((items) => (
            <tr>
              <td>{items.id}</td>
              <td>{items.name}</td>
              <td>{items.email}</td>
              <td>{items.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Task4;
