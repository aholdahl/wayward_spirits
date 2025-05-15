import React from 'react';

export default function ListItem({ index, recipe, isFavorite, isBookmark, toggleFavorites, toggleBookmarks }) {
    const renderIngredients = (ingredients) => {
        let list = ingredients.map(ingredient => {
            return ingredient.variant || ingredient.category
        })
        return list.join(", ")
    }
    return (
        <div className="list-item" key={index}
        >
            <img src={recipe.imageURL || '/logo192.png'} alt={recipe.title} />
            <div>
                <h3>{recipe.title}</h3>
                <p>{renderIngredients(recipe.ingredients)}</p>
                <a href={`/recipe/${recipe.id}`}>View Recipe</a>
"
            </div>
            <div className="inputs">
                <div className="input-group">
                    <label>Favorite</label>
                    <input type="checkbox" checked={isFavorite} onChange={() => toggleFavorites(recipe.id)}></input>
                </div>
                <div className="input-group">
                    <label>Bookmark</label>
                    <input type="checkbox" checked={isBookmark} onChange={() => toggleBookmarks(recipe.id)}></input>
                </div>
            </div>

        </div>
    )
}