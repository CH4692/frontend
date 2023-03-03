import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const ProfileCart = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.profile}>
        <span>Charles Heller</span>
        <span>Admin</span>
        <span>Einstellungen</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Schließen
        </button>
      </div>
    </Modal>
  );
};

export default ProfileCart;
