import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './App.css';
import About from "./components/About"
import NavBar from "./components/NavBar"
import FilmWatchMgr from "./components/FilmWatchMgr"
import Search from './components/Search';
import WatchList from './components/WatchList';


function App() {
  const [watchlist, setWatchlist] = useState([])

  const addToWatchlist = (film) => {
    setWatchlist([...watchlist, film])
  }

  console.log(About, NavBar, FilmWatchMgr)
  // Search API by Title
  //https://www.omdbapi.com/?t={name}&apikey=ecf3f0c5

  return (
    <div className="App">
      <header><h1>Dan and Jackson's Film Watchlist</h1></header>
      <Search addToWatchlist={addToWatchlist}/>
      <WatchList watchlist={watchlist}/>
    </div>
  )
}

export default App;

