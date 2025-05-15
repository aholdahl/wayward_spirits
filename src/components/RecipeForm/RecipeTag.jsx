import React from 'react';

export default function RecipeTag({ index, tag, handleDeleteTag, handleTagChange }) {
    return (
        <div className="recipe-form-item" key={index}>
            <label>Tag Name</label>
            <input type="text" placeholder="Tag Name" value={tag} onChange={(e) => handleTagChange(e, index)} />
            <button type="button" onClick={() => handleDeleteTag(index)}>Delete</button>
        </div>
    )
}