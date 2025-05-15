import React from 'react';

export default function RecipeIngredientVariant({ category, variant, index, handleIngredientChange }) {
    const categories = {
        "anisette": ["absinte", "pernod", "pastis", "sambuca", "ouzo"],
        "brandy": ["cognac/armagnac", "pisco", "calvados", "applejack", "pear", "plum"],
        "gin": ["london dry gin", "old tom gin", "plymouth gin", "genever/holland gin", "sloe gin", "flavored gin"],
        "rum": ["white/light rum", "cachaca/rhum agricole", "gold rum", "dark rum", "funky jamaican rum", "navy strength rum", "flavored rum"],
        "tequila": ["blanco tequila", "reposado tequila", "mezcal tequila"],
        "vodka": ["wheat vodka", "corn vodka", "potato vodka", "rye vodka", "flavored vodka"],
        "whiskey": ["bourbon", "rye whiskey", "irish whiskey", "blended scotch", "single-malt scotch", "flavored whiskey", "cask-strength bourbon"],
        "carbonated beverage": ["sparkling water", "club soda", "tonic water", "ginger ale", "ginger beer", "lemon lime soda", "grapefruit soda", "cola"],
        "coffee": ["coffee bean", "cold brew coffee", "hot coffee", "espresso"],
        "egg": ["egg white", "egg yolk", "whole egg"],
        "fresh produce": ["basil", "blackberry", "cherry", "cucumber", "lemon", "lime", "mint", "orange", "pineapple", "raspberry", "rosemary", "sage", "strawberry"],
        "juice": ["cherry juice", "cranberry juice", "grapefruit juice", "green apple juice", "lemon juice", "lemonade", "lime juice", "orange juice", "pineapple juice", "tomato juice", "unfiltered apple juice", "watermelon juice"],
        "milk": ["milk", "heavy cream", "coconut milk", "coconut cream", "whipped cream", "mascarpone cheese"],
        "other non-alcoholic": ["beef bouillon", "hot water", "cold water"],
        "sweetener": ["simple syrup", "rich simple syrup", "sugar", "demerara syrup", "demerara sugar", "honey syrup", "honey", "maple syrup", "orgeat syrup", "grenadine", "cinnamon syrup", "ginger syrup", "gum syrup", "cherry syrup", "raspberry syrup", "passionfruit syrup", "pineapple syrup", "vanilla syrup"],
        "amaro": ["brown amaro", "red aperitif", "fernet", "artichoke amaro", "bergamot amaro", "gentian amaro"],
        "bitters": ["angostura bitters", "peychaud's bitters", "orange bitters", "chocolate bitters"],
        "fortified wine": ["sweet vermouth", "dry vermouth", "blanc vermouth", "flavored vermouth", "sweet sherry", "dry sherry", "ruby port", "grape distillate", "aromatized wine"],
        "liqueur": ["herbal liqueur", "spice liqueur", "floral liqueur", "nut liqueur", "stone fruit liqueur", "berry liqueur", "orange liqueur", "other fruit liqueur"],
        "sparkling wine": ["champagne", "prosecco"],
        "wine": ["dry red wine", "dry white wine"],
        "beer": ["pale ale", "stout ale", "lager"],
        "other alcoholic": ["aquavit", "swedish punsch"]
    }

    return (
        <div class="recipe-form-item" >
            <label>Subcategory</label>
            <select name="ingredient-variant" value={variant} onChange={(event) => handleIngredientChange(event, index, "variant")}>
                <option value=""></option>
                {categories[category]?.map((name, index) => (
                    <option key={index} value={name}>{name}</option>
                ))}
            </select>
        </div >
    )
}