import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { useState } from "react";
import CartProvider from "./store/CartProvider";
import ProfileCart from "./components/Cart/ProfileCart";
import Dashboard from "./components/Dashboard/Dashboard";
import AllOrders from "./components/Dashboard/AllOrders";
import SignUp from "./components/Form/SignUp";
import SignIn from "./components/Form/SignIn";

function App() {
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
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      {profileCartIsShown && <ProfileCart onClose={hideProfileHandler} />}
      <Header onShowProfile={showProfileHandler} onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
    // <SignUp />
    // <SignIn />
    // <Dashboard />
    // <AllOrders />
  );
}

export default App;
