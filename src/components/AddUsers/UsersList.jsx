import React from 'react';
import styles from './UsersList.module.css';
import { MdDeleteForever } from 'react-icons/md';

const UsersList = ({ usersList, setUsersList }) => {
  const handleDelete = (id) => {
    setUsersList((prevUsersList) => {
      return prevUsersList.filter((user) => user.id !== id);
    });
  };

  return (
    <ul className={styles.users}>
      {usersList.map((user) => (
        <li key={user.id}>
          <div>{user.name}</div>
          <div>({user.age} years old)</div>
          <div>{user.email}</div>
          <div>
            <MdDeleteForever
              className={styles.btnList}
              onClick={() => handleDelete(user.id)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
