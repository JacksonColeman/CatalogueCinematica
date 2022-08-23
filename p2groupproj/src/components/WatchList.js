import React from 'react'
import FilmDetail from "./FilmDetail"


function WatchList ({watchlist}) {
    return(
        <div className="watchlist">
            <h2>Your Watchlist:</h2>
            {watchlist.map(film => <p>{film.Title}</p>)}
        </div>
    )
}

export default WatchList