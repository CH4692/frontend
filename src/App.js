import Dashboard from "./components/Dashboard/Dashboard";
import AllOrders from "./components/Dashboard/AllOrders";
import SignUp from "./components/Form/SignUp";
import SignIn from "./components/Form/SignIn";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DeliverandoPage from "./DeliverandoPage";
import ProtectedRoutes from "./ProtectedRoutes";
import { useState } from "react";

function App() {
  const [user, setUser] = useState();

  return (
    <Router>
      <Routes>
        <Route path="admin" element={<Dashboard user={user} />} />
        <Route path="orders" element={<AllOrders user={user} />} />
        <Route path="user" element={<DeliverandoPage user={user} />} />
        <Route index path="/signin" element={<SignIn setUser={setUser} />} />
        <Route path="/" element={<SignIn setUser={setUser} />} />
        <Route path="/signup" element={<SignUp setUser={setUser} />} />
        <Route path="*" element={<SignIn setUser={setUser} />} />
      </Routes>
    </Router>
  );
}

export default App;
