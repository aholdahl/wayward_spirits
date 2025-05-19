import React, { useState } from 'react';
import ListItem from './ListItem';
import './List.scss';

export default function List({ recipes, bookmarks, favorites, dispatch }) {

    const [searchTerm, setSearchTerm] = useState("");
    const [ingredient, setIngredient] = useState("");
    // const [ABV, setABV] = useState("");
    const [tag, setTag] = useState("");

    const handleIngredientChange = (e) => {
        setIngredient(e.target.value)
    }

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleTagChange = (e) => {
        setTag(e.target.value)
    }

    const matchesIngredient = (recipe, ingredient) => {
        return ingredient === "All Ingredients" || JSON.stringify(recipe.ingredients).toLowerCase().includes(ingredient.toLowerCase())
    }

    const matchesTag = (recipe, tag) => {
        return tag === "" || (recipe.tags.length && recipe.tags.join(', ').toLowerCase().includes(tag.toLowerCase())) || false
    }

    const matchesSearchTerm = (recipe, searchTerm) => {
        return searchTerm === "" || recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    }

    const filteredList = recipes.filter(recipe => matchesIngredient(recipe, ingredient) && matchesTag(recipe, tag) && matchesSearchTerm(recipe, searchTerm)
    )

    return (
        <div className="list-page">
            <input type="text" placeholder="Search cocktails" value={searchTerm} onChange={handleSearchChange} />
            <div className="filter-group">
                <div className="filter">
                    <input type="text" placeholder="Search tags" value={tag} onChange={handleTagChange} />
                </div>
                <div className="filter">
                    <label>Ingredient</label>
                    <select value={ingredient} onChange={handleIngredientChange}>
                        <option>All Ingredients</option>
                        <option>Brandy</option>
                        <option>Gin</option>
                        <option>Rum</option>
                        <option>Tequila</option>
                        <option>Vodka</option>
                        <option>Whiskey</option>
                    </select>
                </div>
                {/* <div className="filter">
                    <label>ABV</label>
                    <select>
                        <option></option>
                    </select>
                </div> */}

            </div>
            <div className="list">
                {
                    filteredList.map((recipe, index) => (
                        <ListItem recipe={recipe} key={index} index={index} isFavorite={favorites.includes(recipe.id)} isBookmark={bookmarks.includes(recipe.id)} dispatch={dispatch} />
                    ))
                }
            </div>
        </div>
    )
}