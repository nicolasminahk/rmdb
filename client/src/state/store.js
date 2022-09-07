import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    movies: moviesReducer,
    user: userReducer,
  },
});

export default store;
