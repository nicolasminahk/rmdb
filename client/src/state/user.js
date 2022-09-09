import {
  createAction,
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";

// export const loginUser = createAction("LOGIN_USER");
export const getUser = createAction("GET_USER");

export const loginUser = createAsyncThunk(
  "LOGIN",
  async ({ email, password }) => {
    console.log(email, password);
    const result = await axios.post("/loggin", {
      email: email,
      password: password,
    });
    return result;
  }
);
// useEffect(()=>{    //---> navigate(/)
// if()
// },[])

const userReducer = createReducer(
  {},
  {
    [loginUser]: (state, action) => action.payload,
    [getUser]: (state, action) => action.payload,
  }
);

export default userReducer;
