import React, {useState} from 'react'
// import WatchList from "./WatchList"
import Search from "./Search"

function AddFilms ({addToWatchlist}) {
    return(
        <div>
            <Search addToWatchlist={addToWatchlist}/>
        </div>
    )
}

export default AddFilms