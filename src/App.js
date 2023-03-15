import { Route, Routes } from "react-router-dom";
import EC from "./components/payments/Ec";
import PA from "./components/payments/Pa";

function App() {
  return (
    <Routes>
      {/* Rutas aqui­ */}
      <Route path="/components/payments/Ec" element={<EC />} />
      <Route path="/components/payments/PA" element={<PA />} />
    </Routes>
  );
}

export default App;
