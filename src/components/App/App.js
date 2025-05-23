import './App.scss';

import React, { useEffect, useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import List from '../List/List';
import BookmarkList from '../List/BookmarkList';
import FavoriteList from '../List/FavoriteList';
import RecipeForm from '../RecipeForm/RecipeForm';
import RecipeDetail from '../RecipeDetail/RecipeDetail';

import recipeReducer from '../../reducers/recipeReducer';

function App() {
  const initialState = { recipes: [], favorites: [], bookmarks: [], editingRecipe: null }

  const [state, dispatch] = useReducer(recipeReducer, initialState)

  useEffect(() => {
    fetch("recipe-list.json")
      .then(response => response.json())
      .then(data => dispatch({
        type: "SET_RECIPES",
        payload: data
      }))
  }, []);

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
          <Route path="/" element={<List recipes={state.recipes} favorites={state.favorites} bookmarks={state.bookmarks} dispatch={dispatch} />}></Route>
          <Route path="/favorites" element={<FavoriteList recipes={state.recipes} favorites={state.favorites} bookmarks={state.bookmarks} dispatch={dispatch} />}></Route>
          <Route path="/bookmarks" element={<BookmarkList recipes={state.recipes} favorites={state.favorites} bookmarks={state.bookmarks} dispatch={dispatch} />}></Route>
          <Route path="/recipe/new" element={<RecipeForm recipes={state.recipes} dispatch={dispatch} />}></Route>
          <Route path="/recipe/edit/:id" element={<RecipeForm editingRecipe={state.editingRecipe} dispatch={dispatch} />}></Route>
          <Route path="/recipe/:id" element={<RecipeDetail dispatch={dispatch} />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
