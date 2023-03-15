import { HashRouter as Router, Route, Routes } from "react-router-dom";
import EC from "./components/Ec";
import PA from "./components/Pa";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/ec" element={<EC />} />
        <Route path="/pa" element={<PA />} />
      </Routes>
    </Router>
  );
}

export default App;
