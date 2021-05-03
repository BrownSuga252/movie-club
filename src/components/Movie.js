import React, { useEffect, useState } from 'react';
import { useParams, useRouteMatch } from "react-router-dom";

function Movie() {
    const { url, path } = useRouteMatch();
    const { name } = useParams();
    const id = url.substring(1);
    const [movieDetails, setMovieDetails] = useState({})
    let fetchData = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MOVIE_CLUB_API_KEY}&language=en-US`

    useEffect(() => {
        fetch(fetchData)
            .then((res) => {
                return res.json();
            })
            .then(data => {
                setMovieDetails(data)
                console.log("Here's data: ", data)
            })
    }, [id])

    return (
        <div>
            <h1>Title: {movieDetails.title}</h1>
            <h1>Overview: {movieDetails.overview}</h1>
            <h1>Release Date: {movieDetails.release_date}</h1>
            <h1>Rating: {movieDetails.vote_average}</h1>
            <h1>Runtime: {movieDetails.runtime}</h1>
        </div>
    );
}

export default Movie;