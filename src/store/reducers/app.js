import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const url = `${process.env.REACT_APP_BACKEND}/api/${process.env.REACT_APP_API_VERSION}`

const initialState = {}

export const register = createAsyncThunk("app/register", async (data, thunkAPI) => {
    try {
        const response = await axios.post(`${url}/vendor/register`, data, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
        })
        return response.data
    } catch (error) {
        const message =
            (error.message && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const sendEmail = createAsyncThunk("app/sendEmail", async (data, thunkAPI) => {
    try {
        const response = await axios.post(`${url}/mails/send-email`, data, {
            headers: {
                "Content-Type": "application/json"
            },
        })
        return response.data
    } catch (error) {
        const message =
            (error.message && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {},
    extraReducers: builder => { },
})

export default appSlice.reducer
