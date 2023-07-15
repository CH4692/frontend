import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pizzarando from "./pages/CustomerPage/CustomerPage";
import Dashboard from "./pages/AdminPage/Dashboard";

/**
 * The App Component where routing is implemented
 * @returns
 */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="customer" element={<Pizzarando />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
