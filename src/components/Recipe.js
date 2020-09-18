import React from "react";
import "../App.css";

const Recipe = (props) => {
  return (
    <div className="recipe">
      <h3>{props.name}</h3>
      <h5>Calories: {Math.round(props.calories)}</h5>
      <ul>
        {props.ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <img src={props.image}></img>
    </div>
  );
};

export default Recipe;
