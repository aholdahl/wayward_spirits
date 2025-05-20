import React from 'react';
import { useNavigate } from 'react-router-dom';
import Ingredient from './Ingredient';
import './RecipeDetail.scss';

export default function RecipeDetail({ dispatch }) {
    const navigate = useNavigate();
    const recipe = {
        "id": 4,
        "imageURL": "https://www.liquor.com/thmb/qAybJQUD4Cx2L1XvYj3HREQhXBQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/sazerac-1500x1500-hero-62326d995cdb4a79a6a0a3bd4a98cef9.jpg",
        "title": "Sazerac",
        "glassware": "rocks",
        "ice": "large rock",
        "preparation": "mixing glass",
        "ingredients": [
            {
                "step": "rinse",
                "quantity": 1,
                "unit": "teaspoon",
                "brand": "",
                "category": "anisette",
                "variant": "absinthe"
            },
            {
                "step": "muddle",
                "quantity": 1,
                "unit": "teaspoon",
                "brand": "",
                "category": "sweetener",
                "variant": "demerara sugar"
            },
            {
                "step": "muddle",
                "quantity": 1,
                "unit": "teaspoon",
                "brand": "",
                "category": "other non-alcoholic",
                "variant": "cold water"
            },
            {
                "step": "combine",
                "quantity": 2.5,
                "unit": "oz",
                "brand": "Rittenhouse",
                "category": "whiskey",
                "variant": "rye whiskey"
            },
            {
                "step": "combine",
                "quantity": 4,
                "unit": "dash",
                "brand": "",
                "category": "bitters",
                "variant": "peychaud's bitters"
            },
            {
                "step": "garnish",
                "quantity": 1,
                "unit": "twist",
                "brand": "",
                "category": "fresh produce",
                "variant": "lemon"
            }
        ],
        "tags": [
            "Mardi Gras"
        ]
    };

    const renderRim = (ingredients) => {
        if (ingredients.length) {
            return (
                <li>Rim glass with {ingredients.map(ingredient => ingredient.variant || ingredient.category).join(", ")}</li>
            )
        }
    }

    const renderRinse = (ingredients) => {
        if (ingredients.length) {
            return (
                <li>Rinse glass with {ingredients.map(ingredient => ingredient.variant || ingredient.category).join(", ")}</li>
            )
        }
    }

    const renderMuddle = (ingredients) => {
        if (ingredients.length) {
            return (
                <li>Muddle {ingredients.map(ingredient => ingredient.variant || ingredient.category).join(", ")} in {recipe.preparation}</li>
            )
        }
    }

    const renderMix = (ingredients) => {
        if (ingredients.length) {
            return (
                <li>Combine {ingredients.map(ingredient => ingredient.variant || ingredient.category).join(", ")} in {recipe.preparation}</li>
            )
        }
    }

    const renderPreparation = () => {
        return recipe.preparation !== "glass" &&
            (
                <li>
                    {recipe.preparation === "blender" && "Add 1 cup of ice and blend"}
                    {recipe.preparation === "shaker" ?
                        containsEgg(recipe.ingredients) ?
                            "Wet-Dry Shake"
                            : containsTomato ?
                                "Roll"
                                : "Shake"
                        : null
                    }
                    {recipe.preparation === "mixing glass" && "Stir"}
                    {recipe.preparation !== "blender" && ` then ${recipe.ice === "none" ? "Double-Strain" : "Strain"} into glass ${recipe.ice !== "none" && `over ${recipe.ice}`}`}
                </li>
            )
    }

    const renderTop = (ingredients) => {
        if (ingredients.length) {
            return (
                <li>Top with {ingredients.map(ingredient => ingredient.variant || ingredient.category).join(", ")}{isTopStirred && " and stir gently"}</li>
            )
        }
    }

    const renderGarnish = (ingredients) => {
        if (ingredients.length) {
            return (
                <li>Garnish with {ingredients.map(ingredient => ingredient.variant || ingredient.category).join(", ")}</li>
            )
        }
    }

    const containsEgg = (ingredients) => {
        const egg = ingredients.find(ingredient =>
            ingredient.variant === "whole egg" || ingredient.variant === "egg white"
        )
        return !!egg
    }

    const containsTomato = (ingredients) => {
        const tomato = ingredients.find(ingredient =>
            ingredient.variant === "tomato juice"
        )
        return !!tomato
    }

    const isTopStirred = (ingredients) => {
        const top = ingredients.find(ingredient => ingredient.step === "float")
        return (top.category === "carbonated beverage" || top.category === "juice")
    }

    const handleEdit = (recipe) => {
        console.log(
            "editing"
        )
        dispatch({
            type: "SET_EDITING_RECIPE",
            payload: recipe
        })
        navigate(`/recipe/edit/${recipe.id}`)
    }

    return (
        <div className="recipe-detail">
            <img src={recipe.imageURL || '/logo192.png'} alt={recipe.title} />
            <h3>{recipe.title}</h3>
            <div className="detail-group">
                <ul>
                    <li>Preparation Method: <span>{recipe.preparation}</span></li>
                    <li>Glassware: <span>{recipe.glassware}</span></li>
                    <li>Ice: <span>{recipe.ice}</span></li>
                </ul>
            </div>
            <div className="detail-group">
                <h4>Ingredients:</h4> {/* TODO: order ingredients by quantity */}
                <ul>
                    {recipe.ingredients.map((ingredient, index) => (<Ingredient key={index} index={index} ingredient={ingredient} />))}
                </ul>
            </div>
            <div className="detail-group">
                <h4>Instructions:</h4>
                <ol>
                    {renderRim(recipe.ingredients.filter(ingredient => ingredient.step === "rim"))}
                    {renderRinse(recipe.ingredients.filter(ingredient => ingredient.step === "rinse"))}
                    {renderMuddle(recipe.ingredients.filter(ingredient => ingredient.step === "muddle"))}
                    {renderMix(recipe.ingredients.filter(ingredient => ingredient.step === "mix"))}
                    {renderPreparation()}
                    {renderTop(recipe.ingredients.filter(ingredient => ingredient.step === "top"))}
                    {renderGarnish(recipe.ingredients.filter(ingredient => ingredient.step === "garnish"))}
                </ol>
            </div>
            <button type="button" onClick={() => handleEdit(recipe)} >Edit</button>
        </div>
    )
}