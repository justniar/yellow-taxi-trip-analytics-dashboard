import { configureStore } from '@reduxjs/toolkit';
import tripReducer from './tripSlice';

const store = configureStore({
    reducer: {
        trips: tripReducer,
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
