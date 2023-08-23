// MovieDetails.js

import { useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';

const MovieDetails = () => {

const { movieID } = useParams();
const [movieDeets, setMovieDeets] = useState({});

    const { original_title, tagline, overview, poster_path } = movieDeets

    useEffect(() =>{
        axios({
            url:`https://api.themoviedb.org/3/movie/${movieID}`,
            params: {
                api_key: process.env.REACT_APP_API_KEY
            },
        }).then((res) =>{
            const movieDetails = res.data
            setMovieDeets(movieDetails)
        })
    },[]);

    return (
        <>
        <div className="poster">
            <h2>{original_title}</h2>
            <h3>{tagline}</h3>
            <p>{overview}</p>
        </div>
        <div className="poster-image">
           <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={`Poster for ${original_title}`} />
        </div>
        </>
    );
}

export default MovieDetails;