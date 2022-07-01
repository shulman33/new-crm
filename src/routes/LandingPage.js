import React, { Component } from 'react'
import {Button, Card, Grid, Image, Divider, Segment} from "semantic-ui-react";
import './LandingPage.css'
import {Auth} from "aws-amplify";
import {Link} from "react-router-dom";

export default class LandingPage extends Component {

    render() {
        return (
            <div>
                <section className="Welcome-Section">
                    <p>
                        <h1>Welcome to Elite Managing</h1>
                        <h2>More than just a CRM, it's a tool for managing your business.</h2>
                    </p>
                    <div className="Get-Started">
                        <Button size='big' inverted>

                            <Link to="/BussinessLogin" style={{color: 'white'}}> Get Started as a Business </Link>

                        </Button>
                        <Button size='big' inverted>

                            <Link to="/CustomerLogin" style={{color: 'white'}}> Get Started as a Customer </Link>

                        </Button>
                    </div>
                </section>
                <Segment className='segment'>
                    <Grid className='main' columns={2} relaxed='very'>
                        <Grid.Column floated='left' width={7}>
                            <div className="trending"><h2>Trending Badges</h2></div>
                            <Card.Group style={{marginLeft: '10vh'}}>
                                <Card style={{width: '250px'}}>
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
                                <Card style={{width: '250px'}}>
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
                                <Card style={{width: '250px'}}>
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
                                <Card style={{width: '250px'}}>
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
                                <Card style={{width: '250px'}}>
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
                                <Card style={{width: '250px'}}>
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
                        <Grid.Column floated='right' width={7}>
                            <div className="featured"><h2>Featured Businesses</h2></div>
                            <Card.Group style={{marginLeft : '7vh'}}>
                                <Card style={{width: '250px'}}>
                                    <Card.Content>
                                        <Image
                                            floated='right'
                                            size='mini'
                                            src='https://d3cl79h6n1fe0x.cloudfront.net/wp-content/uploads/2016/10/28145926/chipotle-logo-1-copy.png'
                                        />
                                        <Card.Header>Chipotle</Card.Header>
                                        <Card.Meta>Best Mexican in Town</Card.Meta>
                                        <Card.Description>
                                            This is a description of the restaurant.
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <div className='ui-button'>
                                            <Button basic color='green'>
                                                Follow Us
                                            </Button>
                                        </div>
                                    </Card.Content>
                                </Card>
                                <Card style={{width: '250px'}}>
                                    <Card.Content>
                                        <Image
                                            floated='right'
                                            size='mini'
                                            src='https://d3cl79h6n1fe0x.cloudfront.net/wp-content/uploads/2016/10/28145926/chipotle-logo-1-copy.png'
                                        />
                                        <Card.Header>Chipotle</Card.Header>
                                        <Card.Meta>Best Mexican in Town</Card.Meta>
                                        <Card.Description>
                                            This is a description of the restaurant.
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <div className='ui-button'>
                                            <Button basic color='green'>
                                                Follow Us
                                            </Button>
                                        </div>
                                    </Card.Content>
                                </Card>
                                <Card style={{width: '250px'}}>
                                    <Card.Content>
                                        <Image
                                            floated='right'
                                            size='mini'
                                            src='https://d3cl79h6n1fe0x.cloudfront.net/wp-content/uploads/2016/10/28145926/chipotle-logo-1-copy.png'
                                        />
                                        <Card.Header>Chipotle</Card.Header>
                                        <Card.Meta>Best Mexican in Town</Card.Meta>
                                        <Card.Description>
                                            This is a description of the restaurant.
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <div className='ui-button'>
                                            <Button basic color='green'>
                                                Follow Us
                                            </Button>
                                        </div>
                                    </Card.Content>
                                </Card>
                                <Card style={{width: '250px'}}>
                                    <Card.Content>
                                        <Image
                                            floated='right'
                                            size='mini'
                                            src='https://d3cl79h6n1fe0x.cloudfront.net/wp-content/uploads/2016/10/28145926/chipotle-logo-1-copy.png'
                                        />
                                        <Card.Header>Chipotle</Card.Header>
                                        <Card.Meta>Best Mexican in Town</Card.Meta>
                                        <Card.Description>
                                            This is a description of the restaurant.
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <div className='ui-button'>
                                            <Button basic color='green'>
                                                Follow Us
                                            </Button>
                                        </div>
                                    </Card.Content>
                                </Card>

                                <Card style={{width: '250px'}}>
                                    <Card.Content>
                                        <Image
                                            floated='right'
                                            size='mini'
                                            src='https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png'
                                        />
                                        <Card.Header>Starbucks</Card.Header>
                                        <Card.Meta>Best Coffee in Town</Card.Meta>
                                        <Card.Description>
                                            This is a description of the restaurant.
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <div className='ui-button'>
                                            <Button basic color='green'>
                                                Follow Us
                                            </Button>
                                        </div>
                                    </Card.Content>
                                </Card>
                                <Card style={{width: '250px'}}>
                                    <Card.Content>
                                        <Image
                                            floated='right'
                                            size='mini'
                                            src='https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png'
                                        />
                                        <Card.Header>Starbucks</Card.Header>
                                        <Card.Meta>Best Coffee in Town</Card.Meta>
                                        <Card.Description>
                                            This is a description of the restaurant.
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <div className='ui-button'>
                                            <Button basic color='green'>
                                                Follow Us
                                            </Button>
                                        </div>
                                    </Card.Content>
                                </Card>
                                <Card style={{width: '250px'}}>
                                    <Card.Content>
                                        <Image
                                            floated='right'
                                            size='mini'
                                            src='https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png'
                                        />
                                        <Card.Header>Starbucks</Card.Header>
                                        <Card.Meta>Best Coffee in Town</Card.Meta>
                                        <Card.Description>
                                            This is a description of the restaurant.
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <div className='ui-button'>
                                            <Button basic color='green'>
                                                Follow Us
                                            </Button>
                                        </div>
                                    </Card.Content>
                                </Card>
                                <Card style={{width: '250px'}}>
                                    <Card.Content>
                                        <Image
                                            floated='right'
                                            size='mini'
                                            src='https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png'
                                        />
                                        <Card.Header>Starbucks</Card.Header>
                                        <Card.Meta>Best Coffee in Town</Card.Meta>
                                        <Card.Description>
                                            This is a description of the restaurant.
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <div className='ui-button'>
                                            <Button basic color='green'>
                                                Follow Us
                                            </Button>
                                        </div>
                                    </Card.Content>
                                </Card>
                                <Card style={{width: '250px'}}>
                                    <Card.Content>
                                        <Image
                                            floated='right'
                                            size='mini'
                                            src='https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png'
                                        />
                                        <Card.Header>Starbucks</Card.Header>
                                        <Card.Meta>Best Coffee in Town</Card.Meta>
                                        <Card.Description>
                                            This is a description of the restaurant.
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <div className='ui-button'>
                                            <Button basic color='green'>
                                                Follow Us
                                            </Button>
                                        </div>
                                    </Card.Content>
                                </Card>
                                <Card style={{width: '250px'}}>
                                    <Card.Content>
                                        <Image
                                            floated='right'
                                            size='mini'
                                            src='https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png'
                                        />
                                        <Card.Header>Starbucks</Card.Header>
                                        <Card.Meta>Best Coffee in Town</Card.Meta>
                                        <Card.Description>
                                            This is a description of the restaurant.
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <div className='ui-button'>
                                            <Button basic color='green'>
                                                Follow Us
                                            </Button>
                                        </div>
                                    </Card.Content>
                                </Card>

                            </Card.Group>
                        </Grid.Column>
                    </Grid>
                    <Divider vertical>And</Divider>
                </Segment>
            </div>
        )
    }
}