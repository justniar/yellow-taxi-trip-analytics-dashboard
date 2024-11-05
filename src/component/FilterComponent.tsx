import React from 'react';
import { useDispatch } from 'react-redux';
import { setTrips } from '../store/tripSlice';

interface FilterComponentProps {
    allTrips: Trip[];
}

const FilterComponent: React.FC<FilterComponentProps> = ({ allTrips }) => {
    const dispatch = useDispatch();

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const filterValue = e.target.value;

        const filteredTrips = filterValue === 'all'
            ? allTrips
            : allTrips.filter(trip => trip.fare <= parseFloat(filterValue));

        dispatch(setTrips(filteredTrips));
    };

    return (
        <div>
            <label htmlFor="filter">Filter by Fare:</label>
            <select id="filter" onChange={handleFilterChange}>
                <option value="all">All</option>
                <option value="10">Up to $10</option>
                <option value="20">Up to $20</option>
                <option value="30">Up to $30</option>
                <option value="50">Up to $50</option>
                <option value="100">Up to $100</option>
            </select>
        </div>
    );
};

export default FilterComponent;
