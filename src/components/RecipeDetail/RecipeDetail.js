import React from 'react';
import Ingredient from './Ingredient';
import './RecipeDetail.scss';

export default function RecipeDetail() {
    const recipe = {
        "imageURL": "https://www.liquor.com/thmb/qAybJQUD4Cx2L1XvYj3HREQhXBQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/sazerac-1500x1500-hero-62326d995cdb4a79a6a0a3bd4a98cef9.jpg",
        "title": "Sazerac",
        "glassware": "Rocks",
        "ice": "Large Rock",
        "preparation": "Mixing Glass",
        "ingredients": [
            {
                "step": "rinse",
                "quantity": 1,
                "unit": "rinse",
                "brand": "",
                "category": "Anisette",
                "variant": "Absinthe",
                "abv": 60.00
            },
            {
                "step": "muddle",
                "quantity": 1,
                "unit": "cube",
                "brand": "",
                "category": "Sweetener",
                "variant": "demerara sugar",
                "abv": 0.00
            },
            {
                "step": "muddle",
                "quantity": 1,
                "unit": "splash",
                "brand": "",
                "category": "Other non-alcoholic",
                "variant": "cold water",
                "abv": 0.00
            },
            {
                "step": "mix",
                "quantity": 2.5,
                "unit": "oz",
                "brand": "Rittenhouse",
                "category": "whiskey",
                "variant": "Rye whiskey",
                "abv": 50.00
            },
            {
                "step": "mix",
                "quantity": 4,
                "unit": "dash",
                "brand": "",
                "category": "Bitters",
                "variant": "Peychaud's bitters",
                "abv": 35.00
            },
            {
                "step": "garnish",
                "quantity": 1,
                "unit": "twist",
                "brand": "",
                "category": "Fresh Produce",
                "variant": "lemon",
                "abv": 0
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
        return recipe.preparation !== "Glass" &&
            (
                <li>
                    {recipe.preparation === "Blender" && "Add 1 cup of ice and blend"}
                    {recipe.preparation === "Shaker" ?
                        containsEgg(recipe.ingredients) ?
                            "Wet-Dry Shake"
                            : containsTomato ?
                                "Roll"
                                : "Shake"
                        : null
                    }
                    {recipe.preparation === "Mixing Glass" && "Stir"}
                {recipe.preparation !== "Blender" && ` then ${recipe.ice === "none" ? "Double-Strain" : "Strain"} into glass ${recipe.ice !== "none" && `over ${recipe.ice}`}`}
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
        return (top.category === "Carbonated Beverage" || top.category === "Juice")
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
                <h4>Ingredients:</h4>
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
        </div>
    )
}