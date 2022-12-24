import React, { useEffect, useState } from "react";
import Add from "./Add";
import Header from "./Header";
import List from "./List";
import Edit from "./Edit";
import { userDetails } from "../User Data/data";


export default function Dashboard() {
  const [users, setUsers] = useState(userDetails);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("userDetails")) {
      sessionStorage.setItem("userDetails", JSON.stringify(userDetails));
    }}); /*Stores data into the session storage form userDetailes array of objects */
  return (
    <div className="container">
      {/* If adding or editing is not in action, this will show the list of users */}
      {!isAdding  && !isEditing && (
        <>
          <Header setIsAdding={setIsAdding}
                   />
          <List setIsEditing={setIsEditing}
                users={users}/>
        </>
      )}
      {/* This will show the form to enter the details */}
      {isAdding && (
        <Add setIsAdding={setIsAdding} />
      )}
      {/* This will show the form to edit the selectd user details */}
      {isEditing && (
        <Edit setIsEditing={setIsEditing}/>
      )}
    </div>
  );
}
