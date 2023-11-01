//import logo from './logo.svg';
//import React, { useState } from "react";
import Content from "./Content";
import "css-pro-layout/dist/css/css-pro-layout.min.css";
import "./styles.css";
import './App.css';

function App() {
  return (
    <div className="layout">
      <header className="header">Header</header>
      <div className="layout has-sidebar">
        <aside className="sidebar">
          Sidebar
        </aside>
        <div className="overlay"></div>
        <div className="layout">
          <main className="Content">
            <Content/>
          </main>
          <footer className="footer">Footer</footer>
        </div>
      </div>
    </div>
  );
}

export default App;
