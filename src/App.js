import { Route, Routes } from "react-router-dom";
import EC from "./components/payments/EC";
import PA from "./components/payments/PA";

function App() {
  return (
    <Routes>
      {/* Rutas aquÃ­ */}
      <Route path="/components/payments/EC" element={<EC />} />
      <Route path="/components/payments/PA" element={<PA />} />
    </Routes>
  );
}

export default App;
