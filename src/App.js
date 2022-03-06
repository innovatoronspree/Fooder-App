import React, { useState,useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  //Nothing is being fetched initially
  const [isLoading, setIsLoading] = useState(false);
  //We set error to null, because initially there is no error
  const [error, setError] = useState(false);
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];
   function fetchMoviesHandler() {
    fetch("https://swapi.dev/api/films/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });
        setMovies(transformedMovies);
      });

    //Since promised are being returned
    //We can make use of async await and that will make the code like
    //synchronous code
  }

  const fetchMoviesHandler2 = useCallback(async()=> {
    try {
      setIsLoading(true);
      setError(null);
      console.log("Apple");
      const response = await fetch("https://swapi.dev/api/films");

      if(!response.ok){
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
      console.log("Strawberry");
    } catch (error) {
      //we can now set the error
      setError(error.message);
      
    }
    console.log("Radish");
    setIsLoading(false);
  },[]);

  useEffect(()=>{
    fetchMoviesHandler2();
  },[fetchMoviesHandler2]);
  
  let content = <p>Found no movies</p>;
  if(movies.length > 0){
    content = <MoviesList movies={movies}/>
  }
  if(error){
    content= <p>{error}</p>
  }
  if(isLoading){
    content = <p>Loading...</p>
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler2}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
