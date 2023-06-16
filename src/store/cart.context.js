import React from "react";

/**
 * This is the Context component which will be passed through out the application to provide the items of the shopping cart
 */
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
