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
import { Geocoder } from '@aws-amplify/ui-react';



function Map(stringAddress) {
    // console.log(stringAddress.replace(' ', '%20'));

    // const address = fetch("https://api.myptv.com/geocoding/v1/locations/by-text?searchText=7646%20168th%20Street%2011366&countryFilter=US", {
    //     method: "GET",
    //     headers: { apiKey: "MWM3ZmI4Y2NmYWY4NDQ2NmIyNzVmYzUxMWM0OGRjNzA6NzM0ODhlMjctYjZkYy00OWU2LWIwODUtNzhiM2ZiODljZmI5", "Content-Type": "application/json" },
    // })
    //     .then(response => response.json())
    //     .then(result => console.log(result));


    const [longitude, setLongitude] = useState(0);
    const [latitude, setLatitude] = useState(0);

    axios.get('https://api.myptv.com/geocoding/v1/locations/by-text?searchText=' + stringAddress + '&apiKey=MWM3ZmI4Y2NmYWY4NDQ2NmIyNzVmYzUxMWM0OGRjNzA6NzM0ODhlMjctYjZkYy00OWU2LWIwODUtNzhiM2ZiODljZmI5', {
        method: "GET",
        headers: { apiKey: "MWM3ZmI4Y2NmYWY4NDQ2NmIyNzVmYzUxMWM0OGRjNzA6NzM0ODhlMjctYjZkYy00OWU2LWIwODUtNzhiM2ZiODljZmI5", "Content-Type": "application/json" }
    }).then(response => {
        console.log(response);
        setLongitude(response.data.locations[0].referencePosition.longitude);
        setLatitude(response.data.locations[0].referencePosition.latitude);
        console.log(`the long is ${longitude.valueOf()}`);
        console.log(`the lat is ${latitude.valueOf()}`);
    })


    const {isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyCDW5FBqJbDGI1_dRr1VpEF_dDjkySZH04",
    });

    const center = {
        lat: latitude.valueOf(),
        lng: longitude.valueOf()
    }


    if(!isLoaded) return <div>Loading...</div>;
    return <Map />;

    function Map(){
        return (
            <GoogleMap
                zoom={10}
                center={center}
                mapContainerClassName="map-container">
                <Marker position={center} />
            </GoogleMap>
        );
    }
}

export default React.memo(Map);
/*import React, {useEffect, useState} from 'react'
import {Card, Grid, Segment} from "semantic-ui-react";
import './Businesses.css';
import axios from "axios";
import {Link} from "react-router-dom";
import AllBusinessCards from "./AllBusinessCards";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { googleSignInButton } from "aws-amplify";
import './Map.css';
import { Geocoder } from '@aws-amplify/ui-react';



function Map(stringAddress) {
   const [longitude, setLongitude] = useState(0);
   const [latitude, setLatitude] = useState(0);

    fetch("https://api.myptv.com/geocoding/v1/locations/by-text?searchText=" + "7646 168th Street 11366" + "&countryFilter=US", {
            method: "GET",
            headers: { apiKey: "MWM3ZmI4Y2NmYWY4NDQ2NmIyNzVmYzUxMWM0OGRjNzA6NzM0ODhlMjctYjZkYy00OWU2LWIwODUtNzhiM2ZiODljZmI5", "Content-Type": "application/json" },
        })
        .then(response => {
            console.log(response);
            setLongitude(response.data.locations[0].referencePosition.longitude);
            setLatitude(response.data.locations[0].referencePosition.latitude);
            console.log(`the long is ${longitude.valueOf()}`);
            console.log(`the lat is ${latitude.valueOf()}`);
        })
       /* .then(response => response.json())
        .then(result => console.log(result));
        setLongitude(response.data.locations[0].referencePosition.longitude);
        setLatitude(response.data.locations[0].referencePosition.latitude);
        console.log(`the long is ${longitude.valueOf()}`);
        console.log(`the lat is ${latitude.valueOf()}`);*


    const {isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyCDW5FBqJbDGI1_dRr1VpEF_dDjkySZH04",
    });


    if(!isLoaded) return <div>Loading...</div>;
    return <Map />;

    function Map(){
        const center = useMemo (() => ({ lat: latitude.valueOf(), lng: longitude.valueOf()}), []);
        
        return (
            <GoogleMap 
                zoom={10} 
                center={center} 
                mapContainerClassName="map-container">
                <Marker position={center} />
            </GoogleMap>
        );
    }
}

export default React.memo(Map);*/