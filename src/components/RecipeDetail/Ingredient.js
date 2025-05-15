import React from 'react';

export default function ListItem({ index, ingredient }) {
    return (
        <li key={index}>
            {ingredient.unit !== "rinse" && ingredient.unit !== "rim" && ingredient.quantity} {ingredient.unit !== "rinse" && ingredient.unit !== "rim" && ingredient.unit !== "each" && ingredient.unit} {ingredient.variant ? `${ingredient.variant}` + (ingredient.category !== "Other non-alcoholic" && ingredient.category !== "Fresh Produce" ? ` (or similar ${ingredient.category})` : '') : ingredient.category}
            {ingredient.brand && (<>, such as <span>{ingredient.brand}</span></>)}{ingredient.unit === "rinse" && ", to rinse"}{ingredient.unit === "rim" && ", to rim"}
        </li>
    )
}