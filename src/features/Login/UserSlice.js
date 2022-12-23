import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    user: {}, 
    token: null
 }

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {   
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        } 
    }
})

export const { setToken, setUser } = UserSlice.actions;

export default UserSlice.reducer;