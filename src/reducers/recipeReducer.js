export default function recipeReducer(state, action) {
    switch (action.type) {
        case "SET_RECIPES":
            return { ...state, recipes: [...action.payload] }
        case "ADD_RECIPE":
            return { ...state, recipes: [...state.recipes, action.payload] }
        case "EDIT_RECIPE":
            return {
                ...state,
                recipes: state.recipes.map(recipe => recipe.id === action.payload.id ? action.payload : recipe)
            }
        case "SET_EDITING_RECIPE":
            return {
                ...state,
                editingRecipe: action.payload
            }
        case "CLEAR_EDITING_RECIPE":
            return {
                ...state,
                editingRecipe: null
            }
        case "DELETE_RECIPE":
            return {
                ...state,
                recipes: state.recipes.filter(recipe => recipe.id !== action.payload.id)
            }
        case "TOGGLE_FAVORITE":
            return {
                ...state,
                favorites: state.favorites.includes(action.payload) ? state.favorites.filter(id => id !== action.payload) : [...state.favorites, action.payload]
            }
        case "TOGGLE_BOOKMARK":
            return {
                ...state,
                bookmarks: state.bookmarks.includes(action.payload) ? state.bookmarks.filter(id => id !== action.payload) : [...state.bookmarks, action.payload]
            }
        default:
            return state;
    }
}