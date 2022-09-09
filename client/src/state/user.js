import {
  createAction,
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAction("GET_USER");

export const loginUser = createAsyncThunk(
  "LOGIN",
  async ({ email, password }) => {
    return (
      await axios.post("/loggin", {
        email,
        password,
      })
    ).data;
  }
);
// useEffect(()=>{    //---> navigate(/)
// if()
// },[])

const userReducer = createReducer(
  {},
  {
    [loginUser.fulfilled]: (state, action) => action.payload,
    [getUser]: (state, action) => action.payload,
  }
);

export default userReducer;
