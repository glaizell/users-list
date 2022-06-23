import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';
import validator from 'validator';

function AddUsers({ addUserHandler }) {
  const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [error, setError] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      enteredName.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      enteredEmail.trim().length === 0
    ) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name',
      });
      return;
    }
    if (enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (Age > 1)',
      });
      return;
    }

    if (!validator.isEmail(enteredEmail)) {
      setError({
        title: 'Invalid email',
        message: 'Please enter a valid email address',
      });
      return;
    }

    addUserHandler(enteredName, enteredAge, enteredEmail);
    setEnteredAge('');
    setEnteredEmail('');
    setEnteredName('');
  };

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          errorHandler={errorHandler}
        />
      )}
      <Card className={styles.formContainer}>
        <form action='' onSubmit={submitHandler}>
          <div>
            <label htmlFor='fullName'>Full Name</label>
            <input
              autocomplete='off'
              type='text'
              id='fullName'
              value={enteredName}
              onChange={nameChangeHandler}
              required
            />
          </div>
          <div>
            <label htmlFor='age'>Age</label>
            <input
              autocomplete='off'
              type='text'
              id='age'
              value={enteredAge}
              onChange={ageChangeHandler}
              required
            />
          </div>
          <div>
            <label htmlFor='email'>Email Address</label>
            <input
              
              type='text'
              id='email'
              value={enteredEmail}
              onChange={emailChangeHandler}
              required
            />
          </div>
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUsers;
