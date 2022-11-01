import React from 'react'
import { useHistory } from "react-router-dom";


function FilmDetail ({film, addToWatchlist}) {
    const history = useHistory();

    const handleWatchlistClick = () => {
        addToWatchlist(film)
        history.push(`/yourfilmlist`)

    }

    return(
        <div className="filmdetail">
            <div className="grid-child-1">
                <img src={film.Poster} alt="poster"></img> 
            </div>

            <div className="grid-child-2">
                <h1 className="filmtitle">{film.Title}</h1>
                <p>{film.Year} • Directed by {film.Director} • {film.Runtime}</p>
                <p>Starring: {film.Actors}</p>
                <p>Genre: {film.Genre}</p>
                <p>Plot Summary: {film.Plot}</p>
                <button onClick={handleWatchlistClick}>Add to Watchlist</button>
            </div>
            
        </div>
    )
}

export default FilmDetail


{/* <div className="row">
            <div className="column">
                <img className="home-pic" src="https://m.media-amazon.com/images/M/MV5BMTAxNDA1ODc5MDleQTJeQWpwZ15BbWU4MDg2MDA4OTEx._V1_SX300.jpg" 
                alt="The Birds"/>
            </div>
            <div className="column">
                <img className="home-pic" src="https://m.media-amazon.com/images/M/MV5BZmY2NjUzNDQtNTgxNC00M2Q4LTljOWQtMjNjNDBjNWUxNmJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg" 
                alt="Grave of the Fireflies"/>
            </div> */}

            // .columnFD {
            //     float: left;
            //     width: 15%;
            //     padding: 0px;
            //     flex-wrap: nowrap;
              
            //   }
              
            //   /* Clearfix (clear floats) */
            //   .rowFD::after {
            //     content: "";
            //     clear: both;
            //     display: table;
            //     flex-wrap: nowrap;
            //     padding: 0px;
            //     margin-right: 25%;
            //   }

//original
            // return(
            //     <div className="filmdetail">
            //         <h1 className="filmtitle">{film.Title}</h1>
            //         <img src={film.Poster} alt="poster"></img> 
            //         <p>{film.Year} • Directed by {film.Director} • {film.Runtime}</p>
            //         <p>Starring: {film.Actors}</p>
            //         <p>Genre: {film.Genre}</p>
            //         <p>Plot Summary: {film.Plot}</p>
            //         <button onClick={handleWatchlistClick}>Add to Watchlist</button>
            //     </div>
            // )

//BOTCHED ATTEMPT 1
        //     <div className="filmdetail">
        //     <div className="rowFD">
        //         <div className="columnFD">
        //             <h1 className="filmtitle">{film.Title}</h1>
        //             <img src={film.Poster} alt="poster"></img> 
        //         </div>
            
        //         <div className="columnFD">
        //             <p>{film.Year} • Directed by {film.Director} • {film.Runtime}</p>
        //             <p>Starring: {film.Actors}</p>
        //             <p>Genre: {film.Genre}</p>
        //             <p>Plot Summary: {film.Plot}</p>
        //             <button onClick={handleWatchlistClick}>Add to Watchlist</button>
        //         </div>
        //     </div>
        // </div>