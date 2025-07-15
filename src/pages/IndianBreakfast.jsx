import React, { useState } from "react";
import recipes from "../data/recipes";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar";
import "./styles/food.css";

function IndianBreakfast() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter for Indian Breakfast recipes and search query
  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.cuisine === "Indian" &&
      recipe.category === "Breakfast" &&
      recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="food">
      <Navbar />
      <h1 className="page-title">Indian Breakfast Recipes</h1>
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

export default IndianBreakfast;