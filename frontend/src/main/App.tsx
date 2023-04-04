import React from "react";
import logo from "../movieLogo1.jpeg";
import "./App.css";
import Header from "../Header";
import MovieList from "../movie/MovieList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <MovieList />
    </div>
  );
}

export default App;
