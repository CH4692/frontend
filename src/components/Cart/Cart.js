import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart.context";
import { useContext } from "react";
import CartItem from "./CartItem";
import axios from "axios";

/**
 * The actual Shopping cart where all chosen items can be seen and ordered by clicking the order Button
 * @param {*} props the props of all items in the shopping cart
 * @returns The shopping cart and its chosesn items
 */

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  let totalAmount = `${cartCtx.totalAmount.toFixed(2)}€`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = async () => {
    const order = {
      orderList: cartCtx.items,
      totalAmount: totalAmount.toString(),
    };

    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/order",
        order,
        {
          params: {
            username: props.user.username,
          },
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      window.location.reload();
    }, 300);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          size={item.size}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && (
          <button onClick={orderHandler} className={classes.button}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
