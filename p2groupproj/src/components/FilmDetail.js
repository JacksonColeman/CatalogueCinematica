import React from 'react'

function FilmDetail ({film, addToWatchlist}) {

    const handleWatchlistClick = () => {
        fetch("http://localhost:8004/films",{
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify(film),
        })
        .then(resp => resp.json())
        .then(addToWatchlist(film))
    }

    return(
        <div className="filmdetail">
            <h1 className="filmtitle">{film.Title}</h1>
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