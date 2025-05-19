import React, { useState } from 'react';
import './RecipeForm.scss';
import RecipeIngredient from './RecipeIngredient';
import RecipeTag from './RecipeTag';

export default function RecipeForm({ recipes, dispatch }) {
    const [title, setTitle] = useState('');
    const [preparation, setPreparation] = useState('');
    const [glassware, setGlassware] = useState('');
    const [ice, setIce] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [tags, setTags] = useState([]);
    const [ingredients, setIngredients] = useState([]);

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handlePreparationChange = (e) => {
        setPreparation(e.target.value)
    }

    const handleGlasswareChange = (e) => {
        setGlassware(e.target.value)
    }

    const handleIceChange = (e) => {
        setIce(e.target.value)
    }

    const handleImageURLChange = (e) => {
        setImageURL(e.target.value)
    }

    const handleTagChange = (event, index) => {
        setTags(prev => prev.map((tag, i) => {
            return i === index ? event.target.value : tag
        }))
    }

    const handleIngredientChange = (event, index, key) => {
        setIngredients(prev =>
            prev.map((ingredient, i) =>
                i === index ? { ...ingredient, [key]: event.target.value } : ingredient
            )
        );
    }

    const handleAddTag = () => {
        setTags([...tags, '']);
    }

    const handleAddIngredient = () => {
        let newIngredient = {
            step: '',
            quantity: 0,
            unit: '',
            category: '',
            variant: '',
            brand: '',
        }
        setIngredients([...ingredients, newIngredient]);
    }

    const handleDeleteTag = (index) => {
        setTags(prev => prev.filter((_tag, i) => i !== index))
    }

    const handleDeleteIngredient = (index) => {
        setIngredients(prev =>
            prev.filter((_ingredient, i) =>
                i !== index
            )
        );
    }

    const clearForm = () => {
        setTitle('');
        setPreparation('');
        setGlassware('');
        setIce('');
        setIngredients([]);
        setTags([]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (ingredients.length) {
            let newRecipe = {
                id: recipes.length + 1,
                title: title,
                preparation: preparation,
                glassware: glassware,
                ice: ice,
                ingredients: ingredients,
                tags: tags.filter(string => string !== "")
            }
            dispatch({
                type: "ADD_RECIPE",
                payload: newRecipe
            })
            clearForm();
        }
    }

    return (
        <form className="recipe-form" onSubmit={handleSubmit}>
            <div class="recipe-form-item">
                <label className="input-name">Title</label>
                <input type="text" name="name" placeholder="Recipe Name" required value={title} onChange={handleTitleChange}></input>
            </div>

            <div class="recipe-form-item">
                <label className="input-name">Image URL</label>
                <input type="text" name="url" placeholder="Image URL" value={imageURL} onChange={handleImageURLChange}></input>
            </div>

            <div class="recipe-form-item">
                <label>Preparation Vessel</label>
                <select name="preparation" required value={preparation} onChange={handlePreparationChange}>
                    <option value=""></option>
                    <option value="glass">Glass</option>
                    <option value="mixing glass">Mixing Glass</option>
                    <option value="shaker">Shaker</option>
                    <option value="blender">Blender</option>
                </select>
            </div>

            <div class="recipe-form-item">
                <label>Glassware</label>
                <select name="glassware" required value={glassware} onChange={handleGlasswareChange}>
                    <option value=""></option>
                    <option value="shot">Shot</option>
                    <option value="flute">Flute</option>
                    <option value="coupe">Coupe</option>
                    <option value="rocks">Rocks</option>
                    <option value="highball">Highball</option>
                    <option value="pint">Pint</option>
                    <option value="hurricane">Hurricane</option>
                    <option value="toddy">Toddy</option>
                </select>
            </div>

            <div class="recipe-form-item">
                <label>Ice Type</label>
                <select name="ice" required value={ice} onChange={handleIceChange}>
                    <option value=""></option>
                    <option value="large rock">Large Rock</option>
                    <option value="small cubes">Small Cubes</option>
                    <option value="crushed ice">Crushed Ice</option>
                    <option value="blended">Blended Ice</option>
                    <option value="none">None</option>
                </select>
            </div >

            <div className="recipe-form-item-list">
                <p>Ingredients</p>
                {
                    ingredients.map((ingredient, index) => (
                        <RecipeIngredient key={index} index={index} step={ingredient.step} quantity={ingredient.quantity} unit={ingredient.unit} category={ingredient.category} variant={ingredient.variant} brand={ingredient.brand} handleIngredientChange={handleIngredientChange} handleDelete={handleDeleteIngredient} />
                    ))
                }
                <button type="button" onClick={handleAddIngredient}>+ New Ingredient</button>
            </div>

            <div className="recipe-form-item-list">
                <p>Tags</p>
                {
                    tags.map((tag, index) => (
                        <RecipeTag key={index} index={index} tag={tag} handleTagChange={handleTagChange} handleDeleteTag={handleDeleteTag} />
                    ))
                }
                <button type="button" onClick={handleAddTag}>+ New Tag</button>
            </div>

            <button type="submit">Save All</button>
        </form>
    )
}