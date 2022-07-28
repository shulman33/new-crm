import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import {Button} from "semantic-ui-react";
import {Link} from "react-router-dom";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {Modal, Button as B, Form, Input, Label, Divider, Image} from "semantic-ui-react";

const mdTheme = createTheme();

function BusinessProfile() {

    const [open, setOpen] = useState(false);
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(null);
    const [perks, setPerks] = useState('');
    const [image, setImage] = useState([]);

    const [business, setBusiness] = useState(null);
    const email = localStorage.getItem('userId');
    const src = 'https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg'

    useEffect(() => {
        axios.post('https://e4zbw0wbnk.execute-api.us-east-1.amazonaws.com/test/get', jsonData)
            .then(response => {
                console.log(response);
                setBusiness(response.data);
            })
    }, []);

    const jsonData = {
        "TableName": "BusinessUserDB",
        "Key": {
            "businessId": {
                "S": email
            }
        }
    }

    const generateJsonData = (pictureName, perks, price, business) => {
        const date = new Date();
        return {
            "TableName": "BadgeDB",
            "Item": {
                "badgeId": {
                    "S": pictureName
                },
                "Business": {
                    "S": business
                },
                "DateOfCreation": {
                    "S": date
                },
                "CurrentOwner": {
                    "S": "None"
                },
                "Price": {
                    "S": price
                },
                "Perks": {
                    "S": perks
                }
            }
        }
    }

    function onClick(event) {
        event.preventDefault();
        setOpen(false);
        generateBadge('/' + description.valueOf(), perks.valueOf(), price.valueOf(), business.Item.businessName.S, '7');
        console.log('/' + description.valueOf());
        console.log('perks: ' + perks.valueOf());
        console.log('price: ' + price.valueOf());
    }

    function generateBadge(descriptions, perks, price, business, numberBadge) {
        price = "$" + price.replace(/[^\d.]/g,'');
        const pictureName = business + numberBadge;
        const s3url = "https://1v74t44h9b.execute-api.us-east-1.amazonaws.com/S3Test/badgepicscontainer/" + pictureName + ".jpeg";
        axios.get("https://loremflickr.com/200/200" + descriptions, {responseType: "blob"})
            .then((response) => {
                console.log(response)
                axios({
                    method : 'put',
                    url : s3url,
                    headers : {'Content-Type' : 'image/jpeg'},
                    data : response.data
                })
                    .then(response => {
                        console.log(response);
                    })
            })
        axios.post('https://e4zbw0wbnk.execute-api.us-east-1.amazonaws.com/test/post', generateJsonData(pictureName, perks, price, business))
    }

    function onImageChange(event) {
        setImage([...event.target.files]);
    }

    function uploadBadge() {
        const s3url = "https://1v74t44h9b.execute-api.us-east-1.amazonaws.com/S3Test/badgepicscontainer/bh.jpeg";
        axios({
            method : 'put',
            url : s3url,
            headers : {'Content-Type' : 'image/jpeg'},
            data : image[0].valueOf()
        }).then(response => {
            console.log('uploaded');
        })

        axios.post('https://e4zbw0wbnk.execute-api.us-east-1.amazonaws.com/test/post', generateJsonData("somename", perks.valueOf(), price.valueOf(), "construction")).then(r => {
            console.log("DB Posted")
        })
    }

    if (!business) {
        return (
            <p>There is no information to display at this time</p>
        )
    }

    return (
        <ThemeProvider theme={mdTheme}>
            <div>
                <section style={
                    {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundImage: "linear-gradient(to right, #43e97b 0%, #38f9d7 100%)",
                        fontWeight: "bold",
                        height: "20vh"
                    }
                }>
                    <h1 style={{fontFamily: "Beba Neue", fontSize: "7vh"}}>
                        Welcome {business.Item.businessName.S}
                    </h1>
                    <div>
                        <Button size="small" inverted>
                            <Link to="/AboutUs" style={{color: 'black'}}> Get to Know Us </Link>
                        </Button>
                        <Button size="small" inverted>
                            <Link to="/Faq" style={{color: "black"}}> Need Help Getting Started? </Link>
                        </Button>
                    </div>
                </section>
                <Box sx={{ display: 'flex'}}>
                    <CssBaseline />
                    <Box
                        component='main'
                        sx={{
                            backgroundColor: (theme) =>
                                theme.palette.mode === 'light'
                                    ? theme.palette.grey[100]
                                    : theme.palette.grey[900],
                            flexGrow: 1,
                            height: '100vh',
                            overflow: 'auto',
                        }}
                    >
                        <Container maxWidth="lg" sx={{ mt: 4, mb: 4}}>
                            <Grid container spacing={3} style={{marginBottom: '8em'}}>
                                <Grid item xs={12} md={8} lg={9}>
                                    <Paper
                                        sx={{
                                            p: 2,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            height: 240,
                                        }}
                                    >
                                        <p>Business Name: {business.Item.businessName.S}</p>
                                        <p>Description: {business.Item.description.S}</p>
                                        <p>Address: {business.Item.address.S}</p>
                                        <p>Email: {business.Item.email.S}</p>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} md={4} lg={3}>
                                    <Paper
                                        sx={{
                                            p: 2,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            height: 240,
                                        }}
                                    >
                                        <h3> Customers </h3>
                                        <p> You have no customers at the moment :( </p>
                                        <p> Trouble getting started? </p>
                                        <p> Visit our <a href="./AboutUs">FAQ page</a> for help! </p>
                                    </Paper>
                                </Grid>
                            </Grid>
                            <div style={{marginBottom: '2em'}}>
                                <Divider />
                                <h1> No Badges Yet </h1>
                                <Image.Group size='medium'>
                                    <Image src={src} />
                                    <Image src={src} />
                                    <Image src={src} />
                                </Image.Group>
                            </div>
                            <Modal
                                onClose={() => setOpen(false)}
                                onOpen={() => setOpen(true)}
                                open={open}
                                trigger={<B color={'green'}>Create Badge</B>}
                            >
                                <Modal.Header>Create Badge Image</Modal.Header>
                                <Modal.Content>
                                    <Form>
                                        <Form.Group>
                                            <Form.Field width={12}>
                                                <label>Badge description</label>
                                                <input placeholder='Coffee' onChange={(e) => setDescription(e.target.value)}/>
                                            </Form.Field>
                                            <Form.Field width={4} style={{marginTop: '1.6em'}}>
                                                <Input labelPosition='right' type='text' placeholder='15' onChange={(e) => setPrice(e.target.value)}>
                                                    <Label basic>$</Label>
                                                    <input />
                                                    <Label>.00</Label>
                                                </Input>
                                            </Form.Field>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Field width={12}>
                                                <label>Perk</label>
                                                <input placeholder='Free coffee fridays' onChange={(e) => setPerks(e.target.value)}/>
                                            </Form.Field>
                                            <Form.Field>
                                                <Modal.Actions>
                                                    <B
                                                        style={{marginTop: '1.6em', marginLeft: '1.6em'}}
                                                        content='Generate Badge'
                                                        icon='checkmark'
                                                        color={'green'}
                                                        onClick={onClick}
                                                    />
                                                </Modal.Actions>
                                            </Form.Field>
                                        </Form.Group>
                                    </Form>
                                    <Divider horizontal>Or</Divider>
                                    <Form>
                                        <Form.Group>
                                            <Form.Field width={8}>
                                                <label>Upload jpg image</label>
                                                <Input
                                                    type='file'
                                                    multiple accept="image/*"
                                                    onChange={onImageChange}
                                                />
                                            </Form.Field>
                                            <Form.Field width={4} style={{marginTop: '1.6em'}}>
                                                <Input labelPosition='right' type='text' placeholder='15' onChange={(e) => setPrice(e.target.value)}>
                                                    <Label basic>$</Label>
                                                    <input/>
                                                    <Label>.00</Label>
                                                </Input>
                                            </Form.Field>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Field width={12}>
                                                <label>Perk</label>
                                                <input placeholder='Free coffee fridays' onChange={(e) => setPerks(e.target.value)}/>
                                            </Form.Field>
                                            <Form.Field>
                                                <Modal.Actions>
                                                    <B
                                                        style={{marginTop: '1.6em', marginLeft: '1.6em'}}
                                                        content='Upload Badge'
                                                        icon='upload'
                                                        color={'green'}
                                                        onClick={uploadBadge}
                                                    />
                                                </Modal.Actions>
                                            </Form.Field>
                                        </Form.Group>
                                    </Form>
                                </Modal.Content>
                                <Modal.Actions>
                                    <B
                                        icon='close'
                                        color={'red'}
                                        onClick={() => setOpen(false)}
                                    />
                                </Modal.Actions>
                            </Modal>
                        </Container>
                    </Box>
                </Box>
            </div>
        </ThemeProvider>
    )
}

export default React.memo(BusinessProfile);