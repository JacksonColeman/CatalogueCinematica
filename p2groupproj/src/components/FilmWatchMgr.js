import React from 'react'
import WatchList from "./WatchList"
import Search from "./Search"
import NewFilmForm from "./NewFilmForm"


function FilmWatchMgr () {
    return(
        <div>
            <WatchList />
            <Search />
            <NewFilmForm />

        </div>
    )
}

export default FilmWatchMgr