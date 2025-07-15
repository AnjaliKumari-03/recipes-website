import React from "react";
import { Link } from "react-router-dom";
import "./styles/RecipeCard.css";

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.name} className="recipe-image" />
      <Link to={`/recipe/${recipe.id}`} className="recipe-title-link">
        <h3 className="recipe-title">{recipe.name}</h3>
      </Link>
      <p><strong>Category:</strong> {recipe.category}</p>
      <p><strong>Time:</strong> {recipe.time}</p>
      <p><strong>Servings:</strong> {recipe.servings}</p>
    </div>
  );
}

export default RecipeCard;