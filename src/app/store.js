import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../features/Login/UserSlice";
import CustomerSlice from "../features/Customer/CustomerSlice";

export const store = configureStore({
    reducer: {
        user: UserSlice,
        customer: CustomerSlice
    }
})