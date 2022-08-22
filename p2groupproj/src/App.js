import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './App.css';
import About from "./components/About"
import NavBar from "./components/NavBar"
import FilmWatchMgr from "./components/FilmWatchMgr"


function App() {
  const [filmSearch, setFilmSearch] = useState("");
  const [currentFilm, setCurrentFilm] = useState([]);
  const [posterUrl, setPosterUrl] = useState("");


  console.log(About, NavBar, FilmWatchMgr)
  // Search API by Title
  //https://www.omdbapi.com/?t={name}&apikey=ecf3f0c5

  const handleFilmSearch = (e) => {
    let filmTitle = e.target.value;
    setFilmSearch(filmTitle);
    // replace spaces with underscores so URL can handle it
  }

  const urlifyTitle = (title) => {
    title = title.replace(" ", "+")
    return title;
  }

  const handleFilmSearchSubmit = (e) => {
    e.preventDefault();
    let urlifiedTitle = urlifyTitle(filmSearch);
    fetch(`https://www.omdbapi.com/?t=${urlifiedTitle}&apikey=ecf3f0c5`)
    .then(res => res.json())
    .then(setCurrentFilm)
  }
  
  return (
  
    <div className="App">
      <form>
        <input type='text' placeholder="Search..." name="filmsearch" value={filmSearch} onChange={handleFilmSearch}></input>
        <button type="submit" onClick={handleFilmSearchSubmit}>Search</button>
      </form>
      <img src={currentFilm.Poster} alt="poster"></img> 
    </div>
  );
}

export default App;

