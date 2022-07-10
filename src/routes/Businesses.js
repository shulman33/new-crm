import React, {Component, useEffect, useState} from 'react'
import {Button, Card, Grid, Image, Segment} from "semantic-ui-react";
import './Businesses.css';
import axios from "axios";
import BusinessCards from "./BusinessCards";


export default function Businesses() {

    const [businesses, setBusinesses] = useState('');

    useEffect(() => {
        getAllBusinesses();
    }, []);

    const jsonData = {
        "TableName": "BusinessUserDB"
    }

    const getAllBusinesses = () => {
        axios.post('https://e4zbw0wbnk.execute-api.us-east-1.amazonaws.com/test/scan', jsonData)
            .then(response => {
                const allBusinesses = response.data.Items;
                setBusinesses(allBusinesses);
            });
    }

    return (
        <div>
            <section className="Participating-Businesses">
                <p className="intro">
                    <h1>Participating Businesses</h1>
                    <h2>Below are all the participating businesses.</h2>
                    <h3>
                        Don't see your favorite business?
                        <a href="./AboutUs"> Contact us!</a>
                    </h3>
                </p>
            </section>
            <Segment className='segment'>
                <Grid className='main' columns={1} relaxed='very'>
                    <Grid.Column>
                        <div className="featured"></div>
                        <Card.Group>
                            <BusinessCards businesses={businesses}/>
                        </Card.Group>
                    </Grid.Column>
                </Grid>
            </Segment>
        </div>
    )
}