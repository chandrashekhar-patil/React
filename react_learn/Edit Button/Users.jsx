import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Users.css";

const Users = ({ getUser, users }) => {
  const [editingUserId, setEditingUserId] = useState(null);
  const [editedData, setEditedData] = useState({ name: "", city: "" });

  useEffect(() => {
    getUser();
  }, []);

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:3000/result/${id}`)
      .then((res) => {
        console.log(res);
        getUser();
      })
      .catch((e) => {
        alert("Error to deleted user");
        console.log(e);
      });
  };

  const handleEdit = (user) => {
    setEditingUserId(user.id);
    setEditedData({ name: user.name, city: user.city });
  };

  const handleSave = (id) => {
    axios
      .put(`http://localhost:3000/result/${id}`, editedData)
      .then((res) => {
        console.log(res);
        alert("User updated successfully!");
        setEditingUserId(null);
        getUser();
      })
      .catch((e) => {
        alert("Error updating user");
        console.log(e);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  return (
    <div className="container">
      <h2>Json Component</h2>
      {users.length > 0 && (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>City</th>
                <th colSpan={2}>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>
                    {editingUserId === user.id ? (
                      <input
                        type="text"
                        name="name"
                        value={editedData.name}
                        onChange={handleChange}
                      />
                    ) : (
                      user.name
                    )}
                  </td>
                  <td>
                    {editingUserId === user.id ? (
                      <input
                        type="text"
                        name="city"
                        value={editedData.city}
                        onChange={handleChange}
                      />
                    ) : (
                      user.city
                    )}
                  </td>
                  <td>
                    {editingUserId === user.id ? (
                      <button
                        className="save"
                        onClick={() => handleSave(user.id)}
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        className="edit"
                        onClick={() => handleEdit(user)}
                      >
                        Edit
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      className="delete"
                      onClick={() => deleteUser(user.id)}
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
