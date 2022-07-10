import React, { Component } from 'react'
import {Button, Card, Grid, Image, Segment} from "semantic-ui-react";
import './CustomerWelcomeP.css'
import {Auth} from "aws-amplify";

export default class CustomerWelcomeP extends Component {

    render() {
        return (
            <div>
                <section className="Welcome-Section">
                    <p>
                        <h1>Welcome to your CRM</h1>
                        <h2>View your badges and special perks!</h2>
                    </p>
                    <div className="Get-Started">
                        <Button size='big' inverted onClick={() => Auth.signOut()}>Sign Out</Button>
                    </div>
                </section>
                <Segment className='segment'>
                    <Grid className='main' columns={1} relaxed='very'>
                        <Grid.Column>
                            <div className="yours"><h2>Your Badges</h2></div>
                            <Card.Group>
                                <Card style={{width: '300px'}}>
                                    <Image src='https://www2.skillsoft.com/wp-content/uploads/2020/01/GenericBadge-1.png' wrapped ui={false} />
                                    <Card.Content>
                                        <Card.Header>Skillsoft</Card.Header>
                                        <Card.Meta>
                                            <span className='date'>Badge</span>
                                        </Card.Meta>
                                        <Card.Description>
                                            This is a badge that gives you something.
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                                <Card style={{width: '300px'}}>
                                    <Image src='https://www2.skillsoft.com/wp-content/uploads/2020/01/GenericBadge-1.png' wrapped ui={false} />
                                    <Card.Content>
                                        <Card.Header>Skillsoft</Card.Header>
                                        <Card.Meta>
                                            <span className='date'>Badge</span>
                                        </Card.Meta>
                                        <Card.Description>
                                            This is a badge that gives you something.
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                                <Card style={{width: '300px'}}>
                                    <Image src='https://www2.skillsoft.com/wp-content/uploads/2020/01/GenericBadge-1.png' wrapped ui={false} />
                                    <Card.Content>
                                        <Card.Header>Skillsoft</Card.Header>
                                        <Card.Meta>
                                            <span className='date'>Badge</span>
                                        </Card.Meta>
                                        <Card.Description>
                                            This is a badge that gives you something.
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                                <Card style={{width: '300px'}}>
                                    <Image src='https://www2.skillsoft.com/wp-content/uploads/2020/01/GenericBadge-1.png' wrapped ui={false} />
                                    <Card.Content>
                                        <Card.Header>Skillsoft</Card.Header>
                                        <Card.Meta>
                                            <span className='date'>Badge</span>
                                        </Card.Meta>
                                        <Card.Description>
                                            This is a badge that gives you something.
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                                <Card style={{width: '300px'}}>
                                    <Image src='https://www2.skillsoft.com/wp-content/uploads/2020/01/GenericBadge-1.png' wrapped ui={false} />
                                    <Card.Content>
                                        <Card.Header>Skillsoft</Card.Header>
                                        <Card.Meta>
                                            <span className='date'>Badge</span>
                                        </Card.Meta>
                                        <Card.Description>
                                            This is a badge that gives you something.
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                                <Card style={{width: '300px'}}>
                                    <Image src='https://www2.skillsoft.com/wp-content/uploads/2020/01/GenericBadge-1.png' wrapped ui={false} />
                                    <Card.Content>
                                        <Card.Header>DevOps Lead</Card.Header>
                                        <Card.Meta>
                                            <span className='date'>Badge</span>
                                        </Card.Meta>
                                        <Card.Description>
                                            This is a badge that gives you something.
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                                <Card style={{width: '300px'}}>
                                    <Image src='https://www2.skillsoft.com/wp-content/uploads/2020/01/GenericBadge-1.png' wrapped ui={false} />
                                    <Card.Content>
                                        <Card.Header>Cloud Computing</Card.Header>
                                        <Card.Meta>
                                            <span className='date'>Badge</span>
                                        </Card.Meta>
                                        <Card.Description>
                                            This is a badge that gives you something.
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                                <Card style={{width: '300px'}}>
                                    <Image src='https://images.credly.com/images/6c201cda-74c5-4593-9ce2-c2fa780a4a94/Skillsoft_ACE_Course_600x600.png' wrapped ui={false} />
                                    <Card.Content>
                                        <Card.Header>ACE</Card.Header>
                                        <Card.Meta>
                                            <span className='date'>Badge</span>
                                        </Card.Meta>
                                        <Card.Description>
                                            This is a badge that gives you something.
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            </Card.Group>
                        </Grid.Column>
                    </Grid>
                </Segment>
            </div>
        )
    }
}