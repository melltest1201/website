import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EC from "./components/payments/EC";
import PA from "./components/payments/PA";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas aquí */}
        <Route path="/components/payments/EC" element={<EC />} />
        <Route path="/components/payments/PA" element={<PA />} />
      </Routes>
    </Router>
  );
}

export default App;
