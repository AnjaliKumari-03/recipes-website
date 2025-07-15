import React from "react";
import Navbar from "../components/Navbar";
import "./styles/Favorites.css";

function Favorites() {
  return (
    <div className="favorites-page">
      <Navbar />
      <h1 className="page-title">Your Favorite Recipes</h1>
      <p className="placeholder-text">You haven’t added any favorites yet!</p>
    </div>
  );
}

export default Favorites;