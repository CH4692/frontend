import CartIcon from "../../../../../assets/icons/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../../../../store/cart.context";

const HeaderCardButton = (props) => {
  const [btIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btIsHighlighted && props.isCart ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>{props.isCart && <CartIcon />}</span>
      <span>{props.span}</span>
      {props.isCart && (
        <span className={classes.badge}>{numberOfCartItems}</span>
      )}
    </button>
  );
};

export default HeaderCardButton;
