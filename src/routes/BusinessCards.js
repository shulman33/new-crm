import React from 'react';
import {Button, Card, Segment} from "semantic-ui-react";

export default function BusinessCards(props) {

    const displayCards = (props) => {
        const {businesses} = props;

        if (businesses.length > 0) {
            return(
                businesses.map((business) => {
                    console.log(business);
                    return(
                        <Card style={{width: '699px'}}>
                            <Card.Content>
                                <Card.Header>{business.businessName.S}</Card.Header>
                                <Card.Description>{business.description.S}</Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui-button'>
                                    <Button basic color='green'>
                                        Follow Us
                                    </Button>
                                </div>
                            </Card.Content>
                        </Card>
                    )
                })
            )
        } else {
            return(
                <div>
                    <section className="Participating-Businesses">
                        <p className="intro">
                            <h1>Participating Businesses</h1>
                            <h2>Below are all the participating businesses.</h2>
                            <h3>
                                Don't see your favorite business?
                                <a href="./AboutUs"> Contact Us!</a>
                            </h3>
                        </p>
                    </section>
                    <Segment className='segment'>
                        <h1>There are no participating businesses at this time.</h1>
                        <h1>We apologize for the inconvenience.</h1>
                        <h1>
                            Try refreshing the page, and if the issue persists please
                            <a href="./AboutUs"> contact us.</a>
                        </h1>
                    </Segment>
                </div>
            )
        }
    }

    return (
        <>
            {displayCards(props)}
        </>
    )
}