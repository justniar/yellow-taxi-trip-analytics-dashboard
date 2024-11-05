import React from "react";
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import { useSelector, UseSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";

const MapComponent : React.FC = () => {
    const trips = useSelector((state: RootState)=>state.trips.trips);

    return (
        <MapContainer center={[40.7128, -74.0060]} zoom={12} style={{height: '100vh', width:'100%'}}>
            <TileLayer 
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
            />
        </MapContainer>
    )
}