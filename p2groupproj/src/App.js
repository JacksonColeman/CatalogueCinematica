import React, {useEffect, useState} from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import AddFilms from "./components/AddFilms"
import WatchList from './components/WatchList';

function App() {
  const [watchlist, setWatchlist] = useState([])
  const [page, setPage] = useState("/")

  // get watchlist data hosted on local server
  useEffect(() => {
    fetch("http://localhost:8004/films")
    .then(res => res.json())
    .then(setWatchlist)
  },[])

  const checkDuplicate = (addedFilm) => {
    const isDuplicate = watchlist.some(film => {
      if (film.Title === addedFilm.Title) {
        return true;
      }
      return false;
    });
      return isDuplicate
    }

  const addToWatchlist = (addedFilm) => {
   if (checkDuplicate(addedFilm)) {
    return null
   } else {
    
        fetch("http://localhost:8004/films",{
        method: 'POST',
        headers: {
          "Content-Type": 'application/json',
        },
        body: JSON.stringify(addedFilm),
      })    
        .then(resp => resp.json())
        .then(newFilm => setWatchlist([...watchlist, newFilm]))
      }
    }

  const removeFromWatchlist = (deletedFilm) => {
    setWatchlist(watchlist => watchlist.filter(film => {
      return film.id != deletedFilm.id;
    }))
  }

  // console.log(Home, NavBar, AddFilms)
  // Search API by Title
  //https://www.omdbapi.com/?t={name}&apikey=ecf3f0c5

  return (
    <div className="App">
      <header><h1 className="sitehead">Catalogue Cinematica: Track Your Films</h1></header>
      <NavBar onChangePage={setPage} />
      <Switch>
        <Route path="/yourfilmlist">
          <WatchList watchlist={watchlist} removeFromWatchlist={removeFromWatchlist}/>
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
    </div>
  )
}

export default App;

