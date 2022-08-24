import React from 'react'

function WatchListItem ({film, removeFromWatchlist}) {

    const handleRemoveClick = () => {
        fetch(`http://localhost:8004/films/${film.id}`, {
            method: "DELETE"
        })
        .then(removeFromWatchlist(film))
    }

    return(
        <div className="watchlist item">
            <img className="filmPoster" src={film.Poster} width="300px" height="460px" key="id"></img>
            <h4>{film.Title}</h4>
            <button onClick={handleRemoveClick}>Remove from Watchlist</button>
        </div>
    )
}

export default WatchListItem