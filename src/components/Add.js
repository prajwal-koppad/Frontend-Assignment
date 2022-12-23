import React, { useState, useRef, useEffect } from "react";

export default function Add({ users, setUsers, setIsAdding }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [dob, setDob] = useState("");
  const [city, setCity] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, []);

  const handleAdd = (e) => {
    const id = users.length + 1;
    const newUser = {
      id,
      firstName,
      lastName,
      dob,
      city,
      mobileNumber,
    };
    users.push(newUser);
    setUsers(users);
    setIsAdding(false);
    alert("New User Added successfully");
  };

  const handleBack = () => {setIsAdding(false)};

  return (
    <div>
      <button className="backBtn" onClick={handleBack}>Back</button>
      <div className="formContainer">
        <form onSubmit={handleAdd}>
          <h1>Add New User</h1>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            ref={textInput}
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
          />
          <label htmlFor="dob">Date Of Birth</label>
          <input
            id="dob"
            type="date"
            name="firstName"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input
            id="mobileNumber"
            type="text"
            name="mobileNumber"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          <div>
            <input className="AddBtn" type="submit" value="Add New User" />
          </div>
        </form>
      </div>
    </div>
  );
}
