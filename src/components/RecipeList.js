import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";
import "../App.css";

const RecipeList = () => {
  const APP_ID = "b68b0e47";
  const APP_KEY = "bae80adc2a7e0ed5aee960f64a7e53f7";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );

    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  useEffect(() => {
    getRecipes();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="section">
      <h1>No idea what to cook?</h1>
      <form onSubmit={getSearch}>
        <div className="form-group form">
          <label className="col-sm-2 col-form-label">Search Recipe: </label>

          <input
            className="form-control"
            type="text"
            value={search}
            onChange={updateSearch}
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.key}
            name={recipe.recipe.label}
            calories={recipe.recipe.calories}
            dietType={recipe.recipe.dietLabels}
            ingredients={recipe.recipe.ingredients}
            image={recipe.recipe.image}
          ></Recipe>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
