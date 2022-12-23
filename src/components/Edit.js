import React from 'react'

export default function Edit({ setIsEditing }) {
  return (
    <div>
    <button className="backBtn" onClick={() => setIsEditing(false)}>Back</button>
    <div className="formContainer">
      <form> 
        <h1>Editing the User</h1>
        <label htmlFor="firstName">First Name</label>
        <input type="text"/>
        <label htmlFor="lastName">Last Name</label>
        <input type="text"/>
        <label htmlFor="dob">Date Of Birth</label>
        <input type="date"/>
        <label htmlFor="city">City</label>
        <input type="text"/>
        <label htmlFor="mobileNumber">Mobile Number</label>
        <input type="text"/>
        <div>
          <input className="AddBtn" type="submit" value="Save" />
        </div>
      </form>
    </div>
  </div>
  );
};


