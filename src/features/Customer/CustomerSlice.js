import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { 
    customers: [],
    page: 1,
    total_pages: 1,
    pending: false,
    error: null
 }

const usersApi =  process.env.REACT_APP_URI_USERS;

export const fetchData = createAsyncThunk('main/fetchData', async(page) => {
    try { 
        const response = await axios.get(`${usersApi}?page=${page}`);
        return response.data;
    } catch(error) {
        throw error?.response;
    }
})

const CustomerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {   
        setPage: (state, action) => {
            state.page = action.payload;
        }   
    },
    extraReducers: builder => {
        builder.addCase(fetchData.pending, state => {
            state.pending = true;
        })
        builder.addCase(fetchData.fulfilled, (state, action) => {
            const users = action.payload.data.filter(
                user => user.first_name.toUpperCase()[0] === "G" || 
                user.last_name.toUpperCase()[0] === "W")
            state.customers = users;
            // pending state to false
            state.pending = false;
            // total pages
            state.total_pages = action.payload.total_pages;
        })
        builder.addCase(fetchData.rejected, (state, action) => {
            // pending state to false
            state.pending = false;
            state.error = action.payload?.message || "Something went wrong";
        })
    }
})

export const { setPage } = CustomerSlice.actions;

export default CustomerSlice.reducer;