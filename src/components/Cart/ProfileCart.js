import { useNavigate } from "react-router-dom";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const ProfileCart = (props) => {
  const navigate = useNavigate();
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.profile}>
        <span>{"Username"}</span>
        <span>{"Admin"}</span>
        <span>Einstellungen</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Schließen
        </button>
        <button
          className={classes["button--alt"]}
          onClick={() => navigate("signin")}
        >
          Logout
        </button>
      </div>
    </Modal>
  );
};

export default ProfileCart;
