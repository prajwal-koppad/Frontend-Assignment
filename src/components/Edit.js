import React, { useEffect, useState } from "react";
// import { userDetails } from "../User Data/data";

export default function Edit({ setIsEditing }) {
  const [details, setDetails] = useState(null);

  const [user,setUser]=useState({
  });

    useEffect(() => {
    let user = JSON.parse(sessionStorage.getItem("user")); //takes the user details from session storage
    setDetails(user[0]); //sets the details of user who is being edited
    // console.log("user", user[0].firstName);
    setUser({
      firstName: user[0].firstName,
      lastName: user[0].lastName,
      dob: user[0].dob,
      city: user[0].city,
      mobileNumber: user[0].mobileNumber
    });
  }, []);

  //targets the each field of the user selected for edit place the original value into the input fields
  const handleChange = (e) => {
    const {
      target: { name, value },
    } = e;
    setUser({ //destructured the user and search the details for the selected field in the form
      ...user,
      [name]: value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    let data = JSON.parse(sessionStorage.getItem("userDetails"));
    let users = data.users
    let id = details.id;
    const editUser = {
      id,
      firstName :user.firstName,
      lastName: user.lastName,
      dob: user.dob,
      city: user.city,
      mobileNumber: user.mobileNumber
    }
    let det = { //destructered the users again and sets values
      ...users,
      [id - 1]: editUser
    }
    let arr = Object.values(det); //stores all the updates into arr
    data = { users: arr } //sets all values of that perticular edited uder
    sessionStorage.setItem("userDetails", JSON.stringify(data)); //stores the data into session storage except the one got deleted.
    setIsEditing(false);
    alert("User details edited successfully")
  }
  // console.log(user);
  return (
    <div>
      <button className="backBtn" onClick={() => setIsEditing(false)}>
        Back
      </button>
      {details && (
        <div className="formContainer">
          <form onSubmit={handleSave}>
            <h1>Editing the User</h1>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={user.firstName}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={user.lastName}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="dob">Date Of Birth</label>
            <input
              id="dob"
              type="date"
              name="dob"
              value={user.dob}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              name="city"
              value={user.city}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="mobileNumber">Mobile Number</label>
            <input
              id="mobileNumber"
              type="text"
              name="mobileNumber"
              value={user.mobileNumber}
              onChange={(e) => handleChange(e)}
            />
            <div>
              <input className="AddBtn" type="submit" value="Save" />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
