import React from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css";

function Home() {
  return (
    <div className="home-page">
      <h1 className="home-title">Welcome to Recipe Hub</h1>

      <div className="categories">
        <div className="category-card indian">
          <h2>Indian</h2>
          <div className="subcategories">
            <Link to="/indian/breakfast" className="subcategory-link">Breakfast</Link>
            <Link to="/indian/lunch" className="subcategory-link">Lunch</Link>
            <Link to="/indian/dinner" className="subcategory-link">Dinner</Link>
          </div>
        </div>

        <div className="category-card western">
          <h2>Western</h2>
          <div className="subcategories">
            <Link to="/western/breakfast" className="subcategory-link">Breakfast</Link>
            <Link to="/western/lunch" className="subcategory-link">Lunch</Link>
            <Link to="/western/dinner" className="subcategory-link">Dinner</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;