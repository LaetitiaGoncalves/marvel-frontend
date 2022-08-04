import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Comic from "./pages/Comic";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comics" element={<Comic />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
