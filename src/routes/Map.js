import React, {useEffect, useState} from 'react'
import {Card, Grid, Segment} from "semantic-ui-react";
import './Businesses.css';
import axios from "axios";
import {Link} from "react-router-dom";
import AllBusinessCards from "./AllBusinessCards";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { googleSignInButton } from "aws-amplify";
import './Map.css';


function Map() {
    const {isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyCDW5FBqJbDGI1_dRr1VpEF_dDjkySZH04",
    });
    
    if(!isLoaded) return <div>Loading...</div>;
    return <Map />;

    function Map(){
        const center = useMemo (() => ({ lat: 44, lng: -80}), []);
    
        return (
            <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
                <Marker position={center} />
            </GoogleMap>
        );
    }
}

export default React.memo(Map);
