import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import AddFilms from "./components/AddFilms"
import Search from './components/Search';
import WatchList from './components/WatchList';


function App() {
  const [watchlist, setWatchlist] = useState([])
  const [page, setPage] = useState("/")


  const addToWatchlist = (film) => {
    setWatchlist([...watchlist, film])
  }

  console.log(Home, NavBar, AddFilms)
  // Search API by Title
  //https://www.omdbapi.com/?t={name}&apikey=ecf3f0c5

  return (
    <div className="App">
      <header><h1>Dan and Jackson's Film Watchlist</h1></header>
      <NavBar onChangePage={setPage} />
      <Switch>
        <Route path="/yourfilmlist">
          <WatchList watchlist={watchlist}/>
        </Route>
        <Route path="/addfilms">
          <AddFilms addToWatchlist={addToWatchlist}/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
      <Search />
      
    </div>
  )
}


export default App;

