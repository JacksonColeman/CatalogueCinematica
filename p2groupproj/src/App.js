import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './App.css';
import About from "./components/About"
import NavBar from "./components/NavBar"
import FilmWatchMgr from "./components/FilmWatchMgr"
import Search from './components/Search';


function App() {

  console.log(About, NavBar, FilmWatchMgr)
  // Search API by Title
  //https://www.omdbapi.com/?t={name}&apikey=ecf3f0c5

  return (
    <div className="App">
      <Search />
    </div>
  )
}

export default App;

