import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import "./Content.css";

//import "./App.css";



const Content = (movies) => {

  return (
    <div className="app">
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default Content;