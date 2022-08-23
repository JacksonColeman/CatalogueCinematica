import React from 'react'
import FilmDetail from "./FilmDetail"


function WatchList ({watchlist}) {
    return(
        <div className="watchlist">
            <h2>Your Watchlist:</h2>
            {watchlist.map(film => <img src={film.Poster} width="300px" height="460px" key="id"></img> )}
        </div>
    )
}

export default WatchList