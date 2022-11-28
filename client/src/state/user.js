import { createAction, createReducer, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
// import { useSelector } from "react-redux";

export const getUser = createAction('GET_USER')
export const logoutUser = createAction('LOGOUT_USER')

export const loginUser = createAsyncThunk('LOGIN', async ({ email, password }) => {
    return (
        await axios.post('/loggin', {
            email,
            password,
        })
    ).data
})

export const addFav = createAsyncThunk('ADD-FAV', async (movie, thunkAPI) => {
    const { user } = thunkAPI.getState()
    return (
        await axios.put(`users/${user._id}/addFavs`, {
            movie,
        })
    ).data
})

const userReducer = createReducer(
    {},
    {
        [loginUser.fulfilled]: (state, action) => action.payload,
        [getUser]: (state, action) => action.payload,
        [logoutUser]: (state, action) => action.payload,
        [addFav.fulfilled]: (state, action) => action.payload,
    }
)

export default userReducer
