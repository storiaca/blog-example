import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
const Modal = ({ title, children, isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className={classes.Backdrop} onClick={hide}></div>
          <div className={classes.Modal}>
            <div className={classes.ModalHeader}>
              <h4>{title}</h4>
              <div className={classes.ModalClose}>
                <button onClick={hide}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>
            {children}
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
