import React from 'react';
import RecipeIngredientVariant from './RecipeIngredientVariant';

export default function RecipeIngredient({ index, step, quantity, unit, category, variant, brand, handleIngredientChange, handleDeleteIngredient }) {

    return (
        <div className="recipe-form-item-list">

            <div className="recipe-form-item">
                <label>Preparation Step</label>
                <select name="step" required value={step} onChange={(event) => handleIngredientChange(event, index, "step")}>
                    <option value=""></option>
                    <option value="rinse">Rinse</option>
                    <option value="rim">Rim</option>
                    <option value="muddle">Muddle</option>
                    <option value="combine">Combine</option>
                    <option value="top">Top/Float</option>
                    <option value="garnish">Garnish</option>
                    <option value="sidecar">Sidecar</option>
                </select>
            </div>

            <div className="recipe-form-item">
                <label>Quantity</label>
                <input type="number" name="quantity" required value={quantity} onChange={(event) => handleIngredientChange(event, index, "quantity")} min={0} step={0.01} />
            </div>

            <div className="recipe-form-item">
                <label>Unit</label>
                <select name="unit" required value={unit} onChange={(event) => handleIngredientChange(event, index, "unit")}>
                    <option value=""></option>
                    <option value="mL">mL</option>
                    <option value="oz">Ounce (30mL)</option>
                    <option value="teaspoon">Teaspoon (5mL)</option>
                    <option value="dash">Dash (0.625mL)</option>
                    <option value="drop">Drop (0.05mL)</option>
                    <option value="pinch">Pinch</option>
                    <option value="each">Each</option>
                    <option value="twist">Twist</option>
                    <option value="slice">Slice</option>
                    <option value="sprig">Sprig</option>
                    <option value="leaf">Leaf</option>
                    <option value="grating">Grating</option>
                    <option value="rim">Rim</option>
                </select>
            </div>

            <div className="recipe-form-item">
                <label>Ingredient Category</label>
                <select name="ingredient-category" required value={category} onChange={(event) => handleIngredientChange(event, index, "category")}>
                    <option value=""></option>

                    <optgroup label="Base Spirits">
                        <option value="gin">Gin</option>
                        <option value="whiskey">Whiskey</option>
                        <option value="rum">Rum</option>
                        <option value="tequila">Tequila</option>
                        <option value="brandy">Brandy</option>
                        <option value="vodka">Vodka</option>
                        <option value="anisette">Anisette</option>
                    </optgroup>

                    <optgroup label="Secondary Alcohols">
                        <option value="amaro">Amaro</option>
                        <option value="liqueur">Liqueur</option>
                        <option value="fortified wine">Fortified Wine</option>
                        <option value="sparkling wine">Sparkling Wine</option>
                        <option value="wine">Wine</option>
                        <option value="beer">Beer</option>
                        <option value="bitters">Bitters</option>
                    </optgroup>
                    <option value="other">Other Alcohol</option>
                    <optgroup label="Non-Alcoholic">
                        <option value="sweetener">Sweetener</option>
                        <option value="juice">Juice</option>
                        <option value="carbonated beverage">Carbonated Beverage</option>
                        <option value="coffee">Coffee</option>
                        <option value="milk">Milk</option>
                        <option value="egg">Egg</option>
                        <option value="fresh produce">Fresh Produce</option>
                        <option value="other non-alcoholic">Other Non-Alcoholic</option>
                    </optgroup>
                </select>
            </div>
            {
                !!category ? <RecipeIngredientVariant index={index} category={category} variant={variant} handleIngredientChange={handleIngredientChange} /> : null
            }

            <div className="recipe-form-item">
                <label>Brand Recommendation</label>
                <input type="text" name="brand" value={brand} onChange={(event) => handleIngredientChange(event, index, "brand")} />
            </div>

            <button type="button" onClick={() => { handleDeleteIngredient(index) }} >Delete</button>
        </div>
    )
}