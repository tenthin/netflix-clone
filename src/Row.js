import React, { useState,useEffect } from 'react'
import axios from './axios';

function Row({ title }) {
    const [movies,setMovies] = useState([]);
    
    // A snippet of code which runs based on a specific condition/variable
    useEffect(() => {
        // 
        async function fetchData() {

        }
        fetchData();
    },[])

    return (
        <div>
            <h1>{title}</h1>

            {/* container --> posters */}
        </div>
    )
}

export default Row;