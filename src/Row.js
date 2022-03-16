import React, { useState,useEffect } from 'react'
import axios from './axios';
import "./Row.css"

const base_url = "https://image.tmdb.org/t/p/original"


function Row({ title,fetchUrl }) {
    const [movies,setMovies] = useState([]);
    
    // A snippet of code which runs based on a specific condition/variable
    useEffect(() => {
        // 
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    },[fetchUrl])

    return (
        <div className="row">
            <h1>{title}</h1>

            <div className="row__posters">
            {/* several row poster */}
            {movies.map(movie => (
                <img
                    className="row__poster" 
                    src={`${base_url}${movie.poster_path}`} 
                    alt={movie.name} 
                />
            ))}
            </div>
        </div>
    )
}

export default Row;