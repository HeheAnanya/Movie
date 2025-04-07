import React  from "react";
import'./Begning.css'
import MovieCard  from "../Pages/Landing Page/Movie";
import Nav from "../Pages/Landing Page/Nav";

function Back(){

    return (
        <>
        <Nav/>
        <div className="back">
            <div className="overlay"></div>
            <div className="text">
                <h1>BLACK WIDOW</h1>
                <h5>2021 · U/A 13+ · 2h 13m</h5>
                <p>Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.
                </p>
                <button className="watchh">Watch Now</button>
                </div>
        </div>
        <div className="topics">
            <div className="top">
                <h2>Latest Releases</h2>
            </div>
            <div className="movies">
                <MovieCard type={"latest"}/>
            </div>
            
            <div className="Language">
                <h2>Hindi</h2>
                <MovieCard type={"hindi"}/>
            </div>
            <div className="Language">
                <h2>English</h2>
                <MovieCard type={"english"}/>
            </div>
        </div>
        </>
    )
}
export default Back 
