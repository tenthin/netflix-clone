import React, { useState,useEffect } from 'react'

function Row({ title }) {
    const [movies,setMovies] = useState([]);
    
    // A snippet of code which runs based on a specific condition/variable
    useEffect(() => {
        // 
    },[])

    return (
        <div>
            <h1>{title}</h1>

            {/* container --> posters */}
        </div>
    )
}

export default Row