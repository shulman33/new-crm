import React, {useState} from 'react'
import {Button, Input, Menu} from 'semantic-ui-react'
import {Auth} from "aws-amplify";
import { Outlet, Link, useNavigate } from "react-router-dom";

export default function MenuBar() {
    const navigate = useNavigate();
    const [user, setUser] = useState(false)

    function onClick(){
        setUser(true)
    }
    function handleLogout(){
        Auth.signOut().then(r => setUser(false))
        navigate("/")

    }
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
                    {!user && (
                        <>
                            <Menu.Item>
                                <Button color='green' onClick={onClick}>

                                    <Link to="/BusinessLogin" style={{color: 'white'}}> Login as Business </Link>

                                </Button>
                            </Menu.Item>
                            <Menu.Item>
                                <Button color='green' onClick={onClick}>

                                    <Link to="/CustomerLogin" style={{color: 'white'}}> Login as Customer </Link>

                                </Button>
                            </Menu.Item>
                        </>
                    )}
                    {user && (
                        <>
                            <Menu.Item>
                                <Button color='green' onClick={handleLogout}>

                                    Logout

                                </Button>
                            </Menu.Item>
                        </>
                    )}

                </Menu.Menu>
                <Outlet />
            </Menu>
        )
    }