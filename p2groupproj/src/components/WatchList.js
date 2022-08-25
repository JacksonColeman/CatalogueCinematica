import React from 'react'
import FilmDetail from "./FilmDetail"
import WatchListItem from './WatchListItem'


function WatchList ({watchlist, removeFromWatchlist}) {
    return(
        <div className="watchlist">
            <h2>Your Watchlist:</h2>
            <div className="cardlist">
                {watchlist.map(film => <WatchListItem film={film} removeFromWatchlist={removeFromWatchlist} key={film.id}></WatchListItem> )}
            </div>
        </div>
    )
}

export default WatchList