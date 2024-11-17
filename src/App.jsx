import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MovieSearch from './components/MovieSearch';
import Watchlist from './components/Watchlist';
import EventPlanner from './components/EventPlanner';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Movie Night Planner</h1>
          <nav>
            <ul>
              <li><Link to="/">Search Movies</Link></li>
              <li><Link to="/watchlist">Watchlist</Link></li>
              <li><Link to="/events">Movie Nights</Link></li>
            </ul>
          </nav>
        </header>
        <main>
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