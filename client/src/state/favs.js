import { useState } from "react";
import { createAction, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const setFavs = createAction("SET_MOVIES");

// export const deleteFavs = createAsyncThunk("DELETE_FAVS", async ()=> {
//     return await axios.delete("/users/:id/favs").then((data)=> {
//         if(data.status = 200) {

//         }
//     })
// })

const favsReducer = createReducer([], {
  [setFavs]: (state, action) => action.payload,
  //   [deleteFavs]: (state, action) => action.payload,
});

export default favsReducer;
