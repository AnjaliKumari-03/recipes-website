import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import IndianBreakfast from "./pages/IndianBreakfast";
import IndianLunch from "./pages/IndianLunch";
import IndianDinner from "./pages/IndianDinner";
import WesternBreakfast from "./pages/WesternBreakfast";
import WesternLunch from "./pages/WesternLunch";
import WesternDinner from "./pages/WesternDinner";
import RecipeDetail from "./pages/RecipeDetail";
import Favorites from "./pages/Favorites";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/indian/breakfast" element={<IndianBreakfast />} />
          <Route path="/indian/lunch" element={<IndianLunch />} />
          <Route path="/indian/dinner" element={<IndianDinner />} />
          <Route path="/western/breakfast" element={<WesternBreakfast />} />
          <Route path="/western/lunch" element={<WesternLunch />} />
          <Route path="/western/dinner" element={<WesternDinner />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
