import React from 'react';
import ListItem from './ListItem';

export default function FavoriteList({ recipes, bookmarks, favorites, dispatch }) {
    return (
        <div className="list-page">
            <h2>Favorites</h2>
            <div className="list">
                {
                    favorites.map((id, index) => {
                        const recipe = recipes.find(recipe => recipe.id === id);
                        return <ListItem index={index} recipe={recipe} key={index} isFavorite={favorites.includes(recipe.id)} isBookmark={bookmarks.includes(recipe.id)} dispatch={dispatch} />
                    })
                }
            </div>
        </div>
    )
}