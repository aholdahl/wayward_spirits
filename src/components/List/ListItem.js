import React from 'react';

export default function ListItem({ index, recipe, isFavorite, isBookmark, dispatch }) {
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
                <p>{renderIngredients(recipe.ingredients)}</p>{/* TODO: order ingredients by quantity */}
                <a href={`/recipe/${recipe.id}`}>View Recipe</a>
            </div>
            <div className="inputs">
                <div className="input-group">
                    <label>Favorite</label>
                    <input type="checkbox" checked={isFavorite} onChange={() => dispatch({
                        type: "TOGGLE_FAVORITE",
                        payload: recipe.id
                    })}></input>
                </div>
                <div className="input-group">
                    <label>Bookmark</label>
                    <input type="checkbox" checked={isBookmark} onChange={() => dispatch({
                        type: "TOGGLE_BOOKMARK",
                        payload: recipe.id
                    })}></input>
                </div>
            </div>
        </div>
    )
}