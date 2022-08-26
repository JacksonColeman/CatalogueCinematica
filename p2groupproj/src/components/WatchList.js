import React, { useState, useEffect } from 'react'
import FilmDetail from "./FilmDetail"
import WatchListItem from './WatchListItem'


function WatchList ({watchlist, removeFromWatchlist}) {
    const [sortCriterion, setSortCriterion] = useState("");

    const handleSortChange = (e) => {
        console.log(e.target.value);
        setSortCriterion(e.target.value)
    }

    if (sortCriterion != ""){
        if (sortCriterion == "Title"){
            watchlist.sort(function(x,y){
                let a = x[sortCriterion].toUpperCase(),
                b = y[sortCriterion].toUpperCase();
                return a == b ? 0 : a > b ? 1 : -1;
            });
        } else if (sortCriterion == "YearOld"){
            watchlist.sort(function(x,y){
                return parseInt(x.Year) - parseInt(y.Year);
            });
        } else if (sortCriterion == "YearNew"){
            watchlist.sort(function(x,y){
                return y.Year - x.Year;
            });
        }
    }

    return(
        <div className="watchlist" onChange={handleSortChange}>
            <select name="sort" className="sortdropdown">Hi
                <option value="">Sort Options</option>
                <option value = "Title">Sort by Title (A to Z)</option>
                <option value = "YearNew">Sort by Year Released (Newest First)</option>
                <option value = "YearOld">Sort by Year Released (Oldest First)</option>
            </select>
            {/* <h2>Your Watchlist:</h2> */}
            <div className="cardlist">
                {watchlist.map(film => <WatchListItem film={film} removeFromWatchlist={removeFromWatchlist} key={film.id}></WatchListItem> )}
            </div>
        </div>
    )
}

export default WatchList