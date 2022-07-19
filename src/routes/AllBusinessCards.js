import React from 'react';
import {Button, Card, Segment, Dimmer, Loader} from "semantic-ui-react";

export default function AllBusinessCards(props) {

    const displayCards = (props) => {
        const {businesses} = props;

        if (businesses.length > 0) {
            return(
                businesses.map((business) => {
                    console.log(business);
                    return(
                        <Card>
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
                <div style={{marginTop: '5vh', marginBottom: '5vh', width: '100%'}}>

                    <Dimmer active inverted>
                        <Loader style={{color: 'mediumseagreen'}} size='large'>Loading</Loader>
                    </Dimmer>

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