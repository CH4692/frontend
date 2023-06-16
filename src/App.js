import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pizzarando from "./Pizzarando";
import Dashboard from "./components/Dashboard/Dashboard";

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
