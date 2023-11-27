import { createSlice } from '@reduxjs/toolkit';

let userData = {
    name: ""
}

export const counterSlice = createSlice({
    name:"userData",
    initialState: userData,
    reducers: {
        userData
    }
});