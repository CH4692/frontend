import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import reactDom from "react-dom";

/**
 * This contains the backdrop of all components.
 * @param {*} props all children in the backdrop
 * @returns
 */
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

/**
 *  This contains the Overlay Modal which if open will open an overlay modal of the given childeren
 * @param {*} props
 * @returns
 */

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

/**
 * contains the backdrop and ModalOverlay components
 * @param {*} props
 * @returns
 */
const Modal = (props) => {
  return (
    <>
      {reactDom.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
