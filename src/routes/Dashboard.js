import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chart from './Chart';
import Deposits from './Deposits';
import axios from "axios";
import {Modal, Button as B, Form} from "semantic-ui-react";
import {useState} from "react";

const mdTheme = createTheme();

function DashboardContent() {

    const [open, setOpen] = useState(false);
    const [description, setDescription] = useState('');

    const generateJsonData = (pictureName, business)=> {
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
                "dateOfCreation": {
                    "S": date
                }
            }
        }
    };

    function onClick(event) {
        event.preventDefault();
        setOpen(false);
        generateBadge('/' + {description}, 'Hii', '7');
        console.log('/' + {description});
    }

    function generateBadge(descriptions, business, numberBadge){
        const pictureName = business + numberBadge;
        const s3URL = "https://1v74t44h9b.execute-api.us-east-1.amazonaws.com/S3Test/badgepicscontainer/" + pictureName +  ".jpeg";
        axios.get("https://loremflickr.com/200/200" + descriptions, {responseType: "blob"})
            .then((response) => {
                console.log(response)
                axios({
                    method : 'put',
                    url : s3URL,
                    headers : {'Content-Type' : 'image/jpeg'},
                    data : response.data
                })
                    .then(response => {
                        console.log(response);
                    });
            });
        axios.post('https://e4zbw0wbnk.execute-api.us-east-1.amazonaws.com/test/post', generateJsonData(pictureName, business))
    }

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Box
                    component="main"
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
                    <Toolbar />
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={3} style={{marginBottom: '8em'}}>
                            {/* Chart */}
                            <Grid item xs={12} md={8} lg={9}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 240,
                                    }}
                                >
                                    <Chart />
                                </Paper>
                            </Grid>
                            {/* Recent Deposits */}
                            <Grid item xs={12} md={4} lg={3}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 240,
                                    }}
                                >
                                    <Deposits />
                                </Paper>
                            </Grid>
                            {/* Current Badges */}
                            {/*<Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>*/}
                            {/*    <Button onClick={() => {*/}
                            {/*        generateBadge('/coffee,boy', 'Yeshiva University', '7');*/}
                            {/*    }}>*/}
                            {/*        Generate a New Badge*/}
                            {/*    </Button>*/}
                            {/*</Paper>*/}
                        </Grid>
                        <Modal
                            onClose={() => setOpen(false)}
                            onOpen={() => setOpen(true)}
                            open={open}
                            trigger={<B color={'green'}>Generate Badge</B>}
                        >
                            <Modal.Header>Give a badge description</Modal.Header>
                            <Modal.Content>
                                <Form>
                                    <Form.Field>
                                        <label>Badge Description</label>
                                        <input placeholder='Badge Description' onChange={(e) => setDescription(e.target.value)}/>
                                    </Form.Field>
                                </Form>
                            </Modal.Content>
                            <Modal.Actions>
                                <B
                                    content='Cancel'
                                    icon='close'
                                    color={'red'}
                                    onClick={() => setOpen(false)}


                                />
                                <B
                                    content='Generate'
                                    icon='checkmark'
                                    color={'green'}
                                    onClick={onClick}


                                />

                            </Modal.Actions>

                        </Modal>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default function Dashboard() {
    return <DashboardContent />;
}