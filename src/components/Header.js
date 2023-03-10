import React from "react";

export default function Header({ setIsAdding }) {
  return (
    <header>
      <div className="headerContainer">
        <h1>User Management System - Dashboard</h1>
        <div>
          {/*opens the add form when clicked on*/}
          <button className="button" onClick={() => setIsAdding(true)}> 
            Add New User
          </button>
        </div>
      </div>
    </header>
  );
}
