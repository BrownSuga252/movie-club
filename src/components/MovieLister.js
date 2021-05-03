import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import MovieList from "./MovieList";

const featuredApi = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_MOVIE_CLUB_API_KEY}`;

function MovieLister() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch(featuredApi)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results);
            })
            .catch(console.error);
    }, []);
    const history = useHistory();
    const handleClick = (id) => history.push('/:id');
    console.log("movies", movies)
    return (
        <div className="header">
            <Header setMovies={setMovies} />

            <div className="movieList">
                {movies &&
                    movies.map((movie) => <MovieList key={movie.id} {...movie} id={movie.id} onClick={() => handleClick(movie.id)} />)}
            </div></div>
    )
}

export default MovieLister