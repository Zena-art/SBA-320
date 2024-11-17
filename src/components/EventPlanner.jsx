import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addEvent, removeEvent } from '../slices/eventsSlice';

function EventPlanner() {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [selectedMovie, setSelectedMovie] = useState('');
  
  const dispatch = useDispatch();
  const events = useSelector(state => state.events);
  const watchlist = useSelector(state => state.watchlist);

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (eventName && eventDate && selectedMovie) {
      dispatch(addEvent({
        id: Date.now(),
        name: eventName,
        date: eventDate,
        movie: selectedMovie
      }));
      setEventName('');
      setEventDate('');
      setSelectedMovie('');
    }
  };

  const handleRemoveEvent = (id) => {
    dispatch(removeEvent(id));
  };

  return (
    <div>
      <h2>Movie Night Events</h2>
      <form onSubmit={handleAddEvent}>
        <input
          type="text"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          placeholder="Event Name"
          required
        />
        <input
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          required
        />
        <select
          value={selectedMovie}
          onChange={(e) => setSelectedMovie(e.target.value)}
          required
        >
          <option value="">Select a movie</option>
          {watchlist.map(movie => (
            <option key={movie.imdbID} value={movie.Title}>{movie.Title}</option>
          ))}
        </select>
        <button type="submit">Add Event</button>
      </form>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            {event.name} - {event.date} - {event.movie}
            <button onClick={() => handleRemoveEvent(event.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventPlanner;