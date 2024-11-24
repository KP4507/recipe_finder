import React from "react";

const Wishlist = ({ wishlist, removeFromWishlist }) => {
  return (
    <div className="wishlist">
      <h1>Your Wishlist</h1>
      <div className="recipes">
        {wishlist.length ? (
          wishlist.map(recipe => (
            <div key={recipe.idMeal} className="card">
              <img src={recipe.strMealThumb} alt={recipe.strMeal} className="card-image" />
              <div className="card-body">
                <span className="category">{recipe.strCategory}</span>
                <h3>{recipe.strMeal}</h3>
                <a href={"https://www.themealdb.com/meal/" + recipe.idMeal} target="_blank" rel="noopener noreferrer">Instructions</a>
                <button onClick={() => removeFromWishlist(recipe.idMeal)} className="btn-remove">Remove from Wishlist</button>
              </div>
            </div>
          ))
        ) : (
          <p>No recipes in your wishlist.</p>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
