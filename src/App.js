import React, { useState } from 'react';
import AddUsers from './components/AddUsers/AddUsers';
import { v4 as uuidv4 } from 'uuid';
import UsersList from './components/AddUsers/UsersList';
import './App.css';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (usersName, usersAge, usersEmail) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: usersName, age: usersAge, email: usersEmail, id: uuidv4() },
      ];
    });
  };

  return (
    <div className='app'>
      <h1>Users List</h1>
      <AddUsers addUserHandler={addUserHandler} usersList={usersList} />
      <UsersList usersList={usersList} setUsersList={setUsersList} />
    </div>
  );
}

export default App;
