import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Comic from "./pages/Comic";
import Home from "./pages/Home";
import Character from "./pages/Character";
import Header from "./components/Header";
import CharacterPage from "./pages/CharacterPage";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comics" element={<Comic />} />
          <Route path="/characters" element={<Character />} />
          <Route path="/characters/:characterId" element={<CharacterPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
