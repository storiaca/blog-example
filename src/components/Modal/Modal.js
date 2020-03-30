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

// const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
//   <React.Fragment>
//     <div className="modal-overlay"/>
//     <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
//       <div className="modal">
//         <div className="modal-header">
//           <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
//             <span aria-hidden="true">&times;</span>
//           </button>
//         </div>
//         <p>
//           Hello, I'm a modal.
//         </p>
//       </div>
//     </div>
//   </React.Fragment>, document.body
// ) : null;

export default Modal;
