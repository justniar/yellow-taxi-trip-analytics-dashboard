import React from 'react';
import MapComponent from './component/MapComponents';
import FilterComponent from './component/FilterComponent';
import TripDetails from './component/TripDetails';
import LoadingIndicator from './component/LoadingIndicator';
import ErrorBoundary from './component/ErrorBoundary';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import { Trip } from './store/tripSlice';

const App: React.FC = () => {
    const loading = useSelector((state: RootState) => state.trips.loading);
    const trips = useSelector((state: RootState) => state.trips.trips);
    const selectedTrip: Trip | null = trips[0] || null;

    return (
        <ErrorBoundary>
            <div>
                <FilterComponent allTrips={trips} />
                {loading ? <LoadingIndicator /> : <MapComponent/>}
                {selectedTrip ? <TripDetails trip={selectedTrip} /> : <p>No trip selected.</p>}
            </div>
        </ErrorBoundary>
    );
};

export default App;
