import React from "react";
import { useParams } from "react-router-dom";
import recipes from "../data/recipes";
import "./styles/RecipeDetail.css";

function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipes.find((rec) => rec.id === id);

  if (!recipe) {
    return <div className="recipe-detail"><h2>Recipe not found!</h2></div>;
  }

  return (
    <div className="recipe-detail">
      <h2>{recipe.name}</h2>
      <img src={recipe.image} alt={recipe.name} className="detail-image" />

      <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
      <p><strong>Category:</strong> {recipe.category}</p>
      <p><strong>Time:</strong> {recipe.time}</p>
      <p><strong>Servings:</strong> {recipe.servings}</p>

      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h3>Steps:</h3>
      <ol>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>

      <h3>Equipment:</h3>
      <ul>
        {recipe.equipment.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {recipe.tips && (
        <>
          <h3>Tips:</h3>
          <p>{recipe.tips}</p>
        </>
      )}
    </div>
  );
}

export default RecipeDetail;