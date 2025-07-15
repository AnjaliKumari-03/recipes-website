import React, { useState } from "react";
import recipes from "../data/recipes";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar";
import "./styles/food.css";

function IndianLunch() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter for Indian Lunch recipes + search query
  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.cuisine === "Indian" &&
      recipe.category === "Lunch" &&
      recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="food">
      <Navbar />
      <h1 className="page-title">Indian Lunch Recipes</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className="recipes-grid">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <p className="no-results">No recipes found.</p>
        )}
      </div>
    </div>
  );
}

export default IndianLunch;