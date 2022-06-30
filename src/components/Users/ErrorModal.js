import React from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import style from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={style.backdrop} onClick={props.onConfirm}>
        <Card className={style.modal}>
          <header className={style.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={style.content}>
            <p>{props.message}</p>
          </div>
          <footer className={style.actions}>
            <Button type="" onClick={props.onConfirm}>
              Okay
            </Button>
          </footer>
        </Card>
      </div>
    </div>
  );
};

export default ErrorModal;
