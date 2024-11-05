import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Trip {
    id: string;
    pickupLocation: [number, number];
    dropoffLocation: [number, number];
    fare: number;
    distance: number;
    paymentType: string;
    time: string;
}

interface TripState {
    trips: Trip[];
    loading: boolean;
    error: string | null;
}

const initialState: TripState = {
    trips: [],
    loading: false,
    error: null,
};

const tripSlice = createSlice({
    name: 'trips',
    initialState,
    reducers: {
        setTrips(state, action: PayloadAction<Trip[]>) {
            state.trips = action.payload;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        setError(state, action: PayloadAction<string | null>) {
            state.error = action.payload;
        },
    },
});

export const { setTrips, setLoading, setError } = tripSlice.actions;
export default tripSlice.reducer;
