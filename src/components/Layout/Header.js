import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCardButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Deliverando</h1>
        <div className={classes["header-btn-container"]}>
          <HeaderCardButton
            onClick={props.onShowCart}
            isCart={true}
            span={"Warenkorb"}
          />
          <HeaderCardButton
            onClick={props.onShowProfile}
            isCart={false}
            span={"Profil"}
          />
        </div>
      </header>
      <div className={classes["main-image"]}>
        {/* We cant use the dot notation because the dash inside the class name */}
        <img src={mealsImage} alt="A table full of delicious food" />
      </div>
    </>
  );
};

export default Header;
