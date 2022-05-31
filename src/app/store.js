import { configureStore } from '@reduxjs/toolkit';
import sideWindowReducer from '../features/sideWindow/sideWindowSlice';

export const store = configureStore({
  reducer: {
    sideWindow: sideWindowReducer
  },
});
