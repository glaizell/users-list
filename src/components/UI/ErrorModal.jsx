import React from 'react';
import Button from './Button';
import { Card } from './Card';
import styles from './ErrorModal.module.css';

const ErrorModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.errorHandler} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>

        <div className={styles.message}>
          <p>{props.message}</p>
        </div>

        <footer className={styles.footerBtn}>
          <Button onClick={props.errorHandler}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
