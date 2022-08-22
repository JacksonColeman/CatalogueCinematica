import React from 'react'

function FilmDetail ({film, addToWatchlist}) {

    const handleWatchlistClick = () => {
        addToWatchlist(film);
    }

    return(
        <div class="filmdetail">
            <h1 class="filmtitle">{film.Title}</h1>
            <img src={film.Poster} alt="poster"></img> 
            <p>{film.Year} • Directed by {film.Director} • {film.Runtime}</p>
            <p>Starring: {film.Actors}</p>
            <p>Genre: {film.Genre}</p>
            <p>Plot Summary: {film.Plot}</p>
            <button onClick={handleWatchlistClick}>Add to Watchlist</button>
        </div>
    )
}

export default FilmDetail