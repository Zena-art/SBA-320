import { createSlice } from '@reduxjs/toolkit';

const eventsSlice = createSlice({
  name: 'events',
  initialState: [],
  reducers: {
    addEvent: (state, action) => {
      state.push(action.payload);
    },
    removeEvent: (state, action) => {
      return state.filter(event => event.id !== action.payload);
    },
  },
});

export const { addEvent, removeEvent } = eventsSlice.actions;
export default eventsSlice.reducer;