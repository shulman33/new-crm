import React, {useState} from 'react'
import {Button, Input, Menu} from 'semantic-ui-react'
import {Auth} from "aws-amplify";
import { Outlet, Link, useNavigate } from "react-router-dom";

import Home from Map;
export default function MenuBar({setBoth}) {
    // const navigate = useNavigate();
    // const [customer, setCustomer] = useState(false)
    // const [business, setBusiness] = useState(false)
    //
    // async function handleLogout(){
    //     const user = await Auth.signOut();
    //     setCustomer(false)
    //     setBusiness(false)
    //     setBoth(user)
    //     localStorage.clear();
    //     navigate("/")
    //
    // }
        return (
            <Menu>
                <Menu.Item header>
                    <Link to="/" style={{color: 'black'}}> Elite Managing </Link>
                </Menu.Item>
                <Menu.Item
                    name='Businesses'
                >
                    <Link to="/Businesses" style={{color: 'black'}}> Businesses </Link>
                </Menu.Item>
                <Menu.Item
                    name='About Us'
                >
                    <Link to="/AboutUs" style={{color: 'black'}}> About Us </Link>
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input className='icon' icon='search' placeholder='Search...' />
                    </Menu.Item>
                    {/*{!customer && !business && (*/}
                    {/*    <>*/}
                    {/*        <Menu.Item>*/}
                    {/*            <Button color='green' onClick={() => setBusiness(true)}>*/}

                    {/*                <Link to="/BusinessLogin" style={{color: 'white'}}> Login as Business </Link>*/}

                    {/*            </Button>*/}
                    {/*        </Menu.Item>*/}
                    {/*        <Menu.Item>*/}
                    {/*            <Button color='green' onClick={() => setCustomer(true)}>*/}

                    {/*                <Link to="/CustomerLogin" style={{color: 'white'}}> Login as Customer </Link>*/}

                    {/*            </Button>*/}
                    {/*        </Menu.Item>*/}
                    {/*    </>*/}
                    {/*)}*/}
                    <Menu.Item>
                        <Button color='green' >

                            <Link to="/BusinessLogin" style={{color: 'white'}}> Login as Business </Link>

                        </Button>
                    </Menu.Item>
                    <Menu.Item>
                        <Button color='green' >

                            <Link to="/CustomerLogin" style={{color: 'white'}}> Login as Customer </Link>

                        </Button>
                    </Menu.Item>
                    {/*{(customer || business) && (*/}
                    {/*    <>*/}
                    {/*        <Menu.Item>*/}
                    {/*            <Button color='green' onClick={handleLogout}>*/}

                    {/*                Logout*/}

                    {/*            </Button>*/}
                    {/*        </Menu.Item>*/}
                    {/*    </>*/}
                    {/*)}*/}

                </Menu.Menu>
                <Outlet />
            </Menu>
        )
    }