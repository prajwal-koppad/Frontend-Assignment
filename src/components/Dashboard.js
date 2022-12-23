import React, { useEffect, useState } from "react";
import Add from "./Add";
import Header from "./Header";
import List from "./List";
import { userDetails } from "../User Data/data";
// import Edit from "./Edit";

export default function Dashboard() {
  const [users, setUsers] = useState(userDetails);
  const [isAdding, setIsAdding] = useState(false);
  // const [isEditing,setIsEditing]=useState(false);
  useEffect(() => {
    console.log("UserDeatils", userDetails);
    if (sessionStorage.getItem("userDetails")) {
      console.log("nothing");
    } else {
      sessionStorage.setItem("userDetails", JSON.stringify(userDetails));
    }
  }, []);
  return (
    <div className="container">
      {/* If adding or editing is not in action, this will show the list of users */}
      {!isAdding  && (
        <>
          <Header setIsAdding={setIsAdding} />
          <List/>
        </>
      )}
      {/* This will show the form to enter the details */}
      {isAdding && (
        <Add users={users} setUsers={setUsers} setIsAdding={setIsAdding} />
      )}
      {/* {isEditing && (
        <Edit />
      )} */}
    </div>
  );
}
