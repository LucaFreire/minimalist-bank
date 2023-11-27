import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './slice';

export const store = configureStore({
    reducer: {
        userData: userSlice.reducer
    }
})