import React, { useState } from "react";
import recipes from "../data/recipes";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar";
import "./styles/food.css";

function IndianDinner() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter for Indian Dinner recipes + search query
  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.cuisine === "Indian" &&
      recipe.category === "Dinner" &&
      recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="food">
      <Navbar />
      <h1 className="page-title">Indian Dinner Recipes</h1>
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

export default IndianDinner;