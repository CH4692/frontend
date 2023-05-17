import Dashboard from "./components/Dashboard/Dashboard";
import AllOrders from "./components/Dashboard/AllOrders";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DeliverandoPage from "./DeliverandoPage";
import { useState } from "react";

function App() {
  const [user, setUser] = useState();

  return (
    <Router>
      <Routes>
        <Route path="admin" element={<Dashboard user={user} />} />
        <Route path="orders" element={<AllOrders user={user} />} />
        <Route path="*" element={<DeliverandoPage user={user} />} />
      </Routes>
    </Router>
  );
}

export default App;
