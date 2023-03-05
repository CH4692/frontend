import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { useState } from "react";
import CartProvider from "./store/CartProvider";
import ProfileCart from "./components/Cart/ProfileCart";
import { Navigate } from "react-router-dom";

function DeliverandoPage({ user }) {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [profileCartIsShown, setProfileCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const showProfileHandler = () => {
    setProfileCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const hideProfileHandler = () => {
    setProfileCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart user={user} onClose={hideCartHandler} />}
      {profileCartIsShown && (
        <ProfileCart user={user} onClose={hideProfileHandler} />
      )}
      <Header onShowProfile={showProfileHandler} onShowCart={showCartHandler} />
      <main>
        <Meals user={user} />
      </main>
    </CartProvider>
  );
}

export default DeliverandoPage;
