import React, { useEffect } from "react";

const Users = ({ getUser, users }) => {
  useEffect(() => {
    getUser();
  }, []); // Fetch users when the component mounts

  return (
    <div>
      <h2 style={{ margin: "20px auto", width: "500px", textAlign: "center" }}>
        Json Component
      </h2>
      {users.length > 0 && (
        <div style={{ margin: "20px auto", width: "500px" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "20px",
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    border: "1px solid #000",
                    padding: "10px",
                    backgroundColor: "#f2f2f2",
                  }}
                >
                  Name
                </th>
                <th
                  style={{
                    border: "1px solid #000",
                    padding: "10px",
                    backgroundColor: "#f2f2f2",
                  }}
                >
                  City
                </th>
                <th
                  colSpan={3}
                  style={{
                    border: "1px solid #000",
                    padding: "10px",
                    backgroundColor: "#f2f2f2",
                  }}
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody style={{ textAlign: "center" }}>
              {users.map((user, index) => (
                <tr key={index}>
                  <td style={{ border: "1px solid #000", padding: "10px" }}>
                    {user.name}
                  </td>
                  <td style={{ border: "1px solid #000", padding: "10px" }}>
                    {user.city}
                  </td>
                  <td style={{ border: "1px solid #000", padding: "10px" }}>
                    <button
                      style={{
                        padding: "5px 10px",
                        cursor: "pointer",
                        backgroundColor: "#2196F3",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td style={{ border: "1px solid #000", padding: "10px" }}>
                    <button
                      style={{
                        padding: "5px 10px",
                        cursor: "pointer",
                        backgroundColor: "#f44336",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Users;
