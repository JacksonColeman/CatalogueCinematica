import React from 'react'

function FilmDetail ({film}) {
    console.log(film)
    return(
        <div>
            <h3>{film.Title}</h3>
            <img src={film.Poster} alt="poster"></img> 
            <p>{film.Year} • Directed by {film.Director}</p>
            <p>Starring {film.Actors}</p>
            <p>Plot Summary: {film.Plot}</p>
            <button>Add to Watchlist</button>
        </div>
    )
}

export default FilmDetail