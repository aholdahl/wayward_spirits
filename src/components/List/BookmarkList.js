import React from 'react';
import ListItem from './ListItem';

export default function BookmarkList({ recipes, bookmarks, favorites, toggleFavorites, toggleBookmarks }) {
    return (
        <div className="list-page">
            <h2>Bookmarks</h2>
            <div className="list">
                {
                    bookmarks.map((id, index) => {
                        const recipe = recipes.find(recipe => recipe.id === id);
                        return <ListItem index={index} recipe={recipe} key={index} isFavorite={favorites.includes(recipe.id)} isBookmark={bookmarks.includes(recipe.id)} toggleFavorites={toggleFavorites} toggleBookmarks={toggleBookmarks} />
                    })
                }
            </div>
        </div>
    )
}