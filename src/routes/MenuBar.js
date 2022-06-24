import React, { Component } from 'react'
import {Button, Input, Menu} from 'semantic-ui-react'
import {Auth} from "aws-amplify";
import { Outlet, Link } from "react-router-dom";

export default class MenuBar extends Component {

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
        return (
            <Menu>
                <Menu.Item header>
                    <Link to="/" style={{color: 'black'}}> CRM </Link>
                </Menu.Item>
                <Menu.Item
                    name='Businesses'
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='About Us'
                    onClick={this.handleItemClick}
                >
                    <Link to="/AboutUs" style={{color: 'black'}}> About Us </Link>
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input className='icon' icon='search' placeholder='Search...' />
                    </Menu.Item>
                    <Menu.Item>
                        <Button color='green' onClick={() => Auth.federatedSignIn()}>login</Button>
                    </Menu.Item>
                </Menu.Menu>
                <Outlet />
            </Menu>
        )
    }
}