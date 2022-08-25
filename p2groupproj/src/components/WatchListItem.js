import React, {useState} from 'react'

function WatchListItem ({film, removeFromWatchlist}) {
    const [showDetails, setShowDetails] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const handleRemoveClick = () => {
        fetch(`http://localhost:8004/films/${film.id}`, {
            method: "DELETE"
        })
        .then(removeFromWatchlist(film))
    }

    const toggleShowDetails = () => {
        setShowDetails(!showDetails)
    }

    const toggleIsHovering = () => {
        setIsHovering(!isHovering);
    }

    return(
        <div onMouseEnter={toggleIsHovering} onMouseLeave={toggleIsHovering} className="watchlist item">
            <img className="filmPoster" src={film.Poster} width="300px" height="460px"></img>
            <h3 className={isHovering ? "hoveringdetails" : "nothoveringdetails"}>{film.Title}</h3>
            {showDetails ?
            <div className={isHovering ? "hoveringdetails" : "nothoveringdetails"}>
                <p>{film.Year} • Directed by {film.Director} • {film.Runtime}</p>
                <p>Starring: {film.Actors}</p>
                <p>Genre: {film.Genre}</p>
                <p>Plot Summary: {film.Plot}</p>
            </div> :
                null
            }
            {isHovering ?
            <div className="hoveringdetails">
                <button onClick={toggleShowDetails}>{showDetails ? "Hide Details" : "Show Details"}</button>
                <button onClick={handleRemoveClick}>Remove from Watchlist</button> 
            </div> :
            null
            }
        </div>
    )
}

export default WatchListItem


// <div onMouseEnter={toggleIsHovering} onMouseLeave={toggleIsHovering} className="watchlist item">
//             <img className="filmPoster" src={film.Poster} width="300px" height="460px"></img>
//             <h3 className={isHovering ? "hoveringdetails" : "nothoveringdetails"}>{film.Title}</h3>
//             {showDetails ?
//             <div className={isHovering ? "hoveringdetails" : "nothoveringdetails"}>
//                 <p>{film.Year} • Directed by {film.Director} • {film.Runtime}</p>
//                 <p>Starring: {film.Actors}</p>
//                 <p>Genre: {film.Genre}</p>
//                 <p>Plot Summary: {film.Plot}</p>
//             </div> :
//                 null
//             }
//             {isHovering ?
//             <div className="hoveringdetails">
//                 <button onClick={toggleShowDetails}>{showDetails ? "Hide Details" : "Show Details"}</button>
//                 <button onClick={handleRemoveClick}>Remove from Watchlist</button> 
//             </div> :
//             null
//             }
//         </div>


//OLD VERSION
{/* <div onMouseEnter={toggleIsHovering} onMouseLeave={toggleIsHovering} className="watchlist item">
<img className="filmPoster" src={film.Poster} width="300px" height="460px" key="id"></img>
<h3>{film.Title}</h3>
{showDetails ?
<div className="watchlist-item-details">
    <p>{film.Year} • Directed by {film.Director} • {film.Runtime}</p>
    <p>Starring: {film.Actors}</p>
    <p>Genre: {film.Genre}</p>
    <p>Plot Summary: {film.Plot}</p>
</div> :
    null
}
{isHovering ?
<div className="watchlist-buttons">
    <button onClick={toggleShowDetails}>{showDetails ? "Hide Details" : "Show Details"}</button>
    <button onClick={handleRemoveClick}>Remove from Watchlist</button> 
</div> :
null
}
</div> */}