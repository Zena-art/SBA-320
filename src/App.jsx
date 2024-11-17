import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import MovieSearch from "./components/MovieSearch";
import Watchlist from "./components/Watchlist";
import EventPlanner from "./components/EventPlanner";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <h1>Movie Night Planner</h1>
          <nav className="nav-links">
            <Link to="/" className="nav-button">Search Movies</Link>
            <Link to="/watchlist" className="nav-button">Watchlist</Link>
            <Link to="/events" className="nav-button">Movie Nights</Link>
          </nav>
        </header>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<MovieSearch />} />
            <Route path="/watchlist" element={<Watchlist />} />
            <Route path="/events" element={<EventPlanner />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;