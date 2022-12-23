import React from "react";

export default function Header({ setIsAdding }) {
  return (
    <header>
      <div className="headerContainer">
        <h1>User Management System - Dashboard</h1>
        <div>
          <button className="button" onClick={() => setIsAdding(true)}>
            Add New User
          </button>
        </div>
      </div>
    </header>
  );
}
