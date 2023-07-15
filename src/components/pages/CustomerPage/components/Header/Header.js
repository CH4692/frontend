import mealsImage from "../../../../../assets/images/pizza.jpg";
import classes from "./Header.module.css";
import HeaderCardButton from "./HeaderCartButton";

/**
 * The header component which contains the header and the background pic.
 * @param {*} props to show the Cart or not
 * @returns header, header card button and the background pic
 */
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Pizzerando</h1>
        <div className={classes["header-btn-container"]}>
          <HeaderCardButton
            onClick={props.onShowCart}
            isCart={true}
            span={"Shopping Cart"}
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
