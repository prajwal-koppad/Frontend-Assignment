import React, { useState } from 'react'
import Add from './Add';
import Header from './Header';
import List from './List';
import { userDetails } from '../User Data/data';

export default function Dashboard() {

    const [users, setUsers] = useState(userDetails);
    const [isAdding, setIsAdding] = useState(false);

  return (
    <div className="container">
        {/* If adding or editing is not in action, this will show the list of users */}
        {!isAdding && (
            <>
                <Header setIsAdding={setIsAdding}/>
                <List users={users}
                />
            </>
        )}
        {/* This will show the form to enter the details */}
        {isAdding && (
            <Add users={users}
                 setUsers={setUsers}
                 setIsAdding={setIsAdding}
            />
        )}
    </div>
  )
}
