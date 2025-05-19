import './App.scss';

import React, { useEffect, useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import List from './components/List/List';
import BookmarkList from './components/List/BookmarkList';
import FavoriteList from './components/List/FavoriteList';
import RecipeForm from './components/RecipeForm/RecipeForm';
import RecipeDetail from './components/RecipeDetail/RecipeDetail';

import recipeReducer from './reducers/recipeReducer';

function App() {
  const initialState = { recipes: [], favorites: [], bookmarks: []}

  const [state, dispatch] = useReducer(recipeReducer, initialState)

  useEffect(() => {
    fetch("recipe-list.json")
      .then(response => response.json())
      .then(data => dispatch({
        type: "SET_RECIPES",
        payload: data
      }))

  }, []);

  const toggleFavorites = (recipeID) => {
    dispatch({
      type: "TOGGLE_FAVORITE",
      payload: recipeID
    })
  }

  const toggleBookmarks = (recipeID) => {
    dispatch({
      type: "TOGGLE_BOOKMARK",
      payload: recipeID
    })
  }

  const addRecipe = (payload) => {
    dispatch({
      type: "ADD_RECIPE",
      payload: payload
    })
  }

  return (
    <div className="App">
      <Header />
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
            <li>
              <Link to="/bookmarks">Bookmarks</Link>
            </li>
            <li>
              <Link to="/recipe/new">Add New Recipe</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<List recipes={state.recipes} favorites={state.favorites} bookmarks={state.bookmarks} toggleFavorites={toggleFavorites} toggleBookmarks={toggleBookmarks} />}></Route>
          <Route path="/favorites" element={<FavoriteList recipes={state.recipes} favorites={state.favorites} bookmarks={state.bookmarks} toggleFavorites={toggleFavorites} toggleBookmarks={toggleBookmarks} />}></Route>
          <Route path="/bookmarks" element={<BookmarkList recipes={state.recipes} favorites={state.favorites} bookmarks={state.bookmarks} toggleFavorites={toggleFavorites} toggleBookmarks={toggleBookmarks} />}></Route>
          <Route path="/recipe/new" element={<RecipeForm recipes={state.recipes} addRecipe={addRecipe} />}></Route>
          <Route path="/recipe/:id" element={<RecipeDetail />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
