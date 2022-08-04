import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Comic from "./pages/Comic";
import Home from "./pages/Home";
import Character from "./pages/Character";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comics" element={<Comic />} />
          <Route path="/characters" element={<Character />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
