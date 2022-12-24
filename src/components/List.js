import React, { useEffect, useState } from "react";

export default function List({ setIsEditing }) {
  const [details, setDetails] = useState({})
  useEffect(() => {
    let data = JSON.parse(sessionStorage.getItem("userDetails"));
    setDetails(data);
  }, []);

  const handleDelete = (id) => {
    let users = details.users.filter((item) => item.id !== id); //gives the ids of users except the one being deleted.
    let data = {users: users}
    data.users.map((user, i) => user.id=i+1)
    setDetails(data);
    sessionStorage.setItem("userDetails",JSON.stringify(data)); //stores the data into session storage except the one got deleted.
    alert("Deleted the user successfully");
  }

  const handleEdit = (id) => {
    setIsEditing(true);
    let users = details.users.filter((item) => item.id === id);
    console.log(users, id);
  }
  return (
    <div className="table">
      <h2 className="list">List of Users</h2>
      <table>
        <thead>
          <tr>
            <th>Sl.No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>City</th>
            <th>Mobile Number</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {details.users ? ( //takes the data from the details and maps them with the respected fields.
            details.users.map((user,i) => (
              <tr key={user.id}>
                <td>{i + 1}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.dob}</td>
                <td>{user.city}</td>
                <td>{user.mobileNumber}</td>
                <td className="right">
                  <button className="button" onClick={() =>handleEdit(user.id)}>Edit</button>
                </td>
                <td className="left">
                  <button className="button" onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Users</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
