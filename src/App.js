import './App.scss';

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import List from './components/List/List';
import BookmarkList from './components/List/BookmarkList';
import FavoriteList from './components/List/FavoriteList';
import RecipeForm from './components/RecipeForm/RecipeForm';
import RecipeDetail from './components/RecipeDetail/RecipeDetail';

function App() {

  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    fetch("recipe-list.json")
      .then(response => response.json())
      .then(data => setRecipes(data))

  }, []);

  const toggleFavorites = (recipeID) => {
    setFavorites(prev => prev.includes(recipeID) ? prev.filter(id => id !== recipeID) : [...prev, recipeID])
  }

  const toggleBookmarks = (recipeID) => {
    setBookmarks(prev => prev.includes(recipeID) ? prev.filter(id => id !== recipeID) : [...prev, recipeID])
  }

  const addRecipe = (payload) => {
    setRecipes([...recipes, payload])
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
          <Route path="/" element={<List recipes={recipes} favorites={favorites} bookmarks={bookmarks} toggleFavorites={toggleFavorites} toggleBookmarks={toggleBookmarks} />}></Route>
          <Route path="/favorites" element={<FavoriteList recipes={recipes} favorites={favorites} bookmarks={bookmarks} toggleFavorites={toggleFavorites} toggleBookmarks={toggleBookmarks} />}></Route>
          <Route path="/bookmarks" element={<BookmarkList recipes={recipes} favorites={favorites} bookmarks={bookmarks} toggleFavorites={toggleFavorites} toggleBookmarks={toggleBookmarks} />}></Route>
          <Route path="/recipe/new" element={<RecipeForm recipes={recipes} addRecipe={addRecipe} />}></Route>
          <Route path="/recipe/:id" element={<RecipeDetail />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
