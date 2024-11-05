import { configureStore } from '@reduxjs/toolkit';
import tripReducer from './tripSlice';

const store = configureStore({
    reducer: {
        trips: tripReducer,
    },
});

export default store;
