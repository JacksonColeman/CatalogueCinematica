import React, {useState} from 'react'
import FilmDetail from './FilmDetail';

function Search () {
    const [filmSearch, setFilmSearch] = useState("");
    const [currentFilm, setCurrentFilm] = useState([]);

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

    return(
        <div className="search">
            <form>
                <input type='text' placeholder="Search..." name="filmsearch" value={filmSearch} onChange={handleFilmSearch}></input>
                <button type="submit" onClick={handleFilmSearchSubmit}>Search</button>
            </form>
            {currentFilm.Genre ? <FilmDetail film={currentFilm}/> : <p>Search for a film title to get information about the film and add it to your watchlist!</p>}
            
        </div>
    )
}

export default Search