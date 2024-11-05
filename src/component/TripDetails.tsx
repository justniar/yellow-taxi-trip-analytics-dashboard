import React from 'react';

interface TripDetailsProps {
    trip: {
        fare: number;
        distance: number;
        paymentType: string;
        time: string;
    } | null;
}

const TripDetails: React.FC<TripDetailsProps> = ({ trip }) => {
    if (!trip) return null;

    return (
        <div>
            <h3>Trip Details</h3>
            <p>Fare: ${trip.fare}</p>
            <p>Distance: {trip.distance} miles</p>
            <p>Payment Type: {trip.paymentType}</p>
            <p>Time: {trip.time}</p>
        </div>
    );
};

export default TripDetails;
