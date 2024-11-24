import React from "react";

const RecipeCard = ({ recipe, addToWishlist, removeFromWishlist, isInWishlist }) => {
    const {
        idMeal,
        strMeal,
        strCategory,
        strMealThumb,
    } = recipe;

    return (
        <div className="card">
            <img
                src={strMealThumb}
                alt={strMeal}
                className="card-image"
            />
            <div className="card-body">
                <span className="category">{strCategory}</span>
                <h3>{strMeal}</h3>
                <a href={"https://www.themealdb.com/meal/" + idMeal} target="_blank" rel="noopener noreferrer">Instructions</a>
                {isInWishlist ? (
                    <button onClick={() => removeFromWishlist(idMeal)} className="btn-remove">Remove from Wishlist</button>
                ) : (
                    <button onClick={() => addToWishlist(recipe)} className="btn-add">Add to Wishlist</button>
                )}
            </div>
        </div>
    );
};

export default RecipeCard;
