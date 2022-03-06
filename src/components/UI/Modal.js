import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

//We are making the backdrop and overlays component here itself
//because they are related and lean components

//The onClick prop exists on almost all HTML elements
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}/>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const Modal = (props) => {
  //   return (
  //     <React.Fragment>
  //       <Backdrop />
  //       <ModalOverlay>{props.children}</ModalOverlay>
  //     </React.Fragment>
  //   );

  const portalElement = document.getElementById("overlays");

  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};
export default Modal;
