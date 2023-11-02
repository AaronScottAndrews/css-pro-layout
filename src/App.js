//import logo from './logo.svg';
//import React, { useState } from "react";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Content from "./Content";
import "css-pro-layout/dist/css/css-pro-layout.min.css";
import "./styles.css";
//import './App.css';

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => { searchMovies("Batman"); }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="layout">
      <header className="header"><Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchMovies={searchMovies} /></header>
      <div className="layout has-sidebar">
        <aside className="sidebar">
          Sidebar
        </aside>
        <div className="overlay"></div>
        <div className="layout">
          <main className="Content">
            <Content movies={movies}/>
          </main>
          <footer className="footer">Footer</footer>
        </div>
      </div>
    </div>
  );
}

export default App;
