import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { useState } from "react";
import CartProvider from "./store/CartProvider";

function DeliverandoPage({ user }) {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart user={user} onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals user={user} />
      </main>
    </CartProvider>
  );
}

export default DeliverandoPage;
