import { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart.context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `${props.price.toFixed(2)}€`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      size: props.size,
      amount: amount,
      sku: props.sku,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.category}</div>
        <div className={classes.description}>{props.size}</div>
        <div className={classes.description}>{props.ingredients}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
