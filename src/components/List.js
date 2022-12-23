import React from 'react'

export default function List({ users }) {
  return (
    <div className="table">
      <h2 className='list'>List of Users</h2>
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
            {users.length > 0 ? (
                users.map((user, i) => (
                    <tr key={user.id}>
                        <td>{i + 1}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.dob}</td>
                        <td>{user.city}</td>
                        <td>{user.mobileNumber}</td>
                        <td className="right">
                            <button className="button">
                                Edit
                            </button>
                        </td>
                        <td className="left">
                            <button className="button">
                                Delete
                            </button>
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
  )
}
