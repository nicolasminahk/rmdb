import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies";
import userReducer from "./user";
import { logger } from "redux-logger";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    movies: moviesReducer,
    user: userReducer,
  },
});

export default store;
