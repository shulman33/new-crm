import React, { Component } from "react";
import axios from "axios";

export default class DummyLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            TableName: 'CustomerUser',
            Item: {
                customerId: {
                    S: this.generate
                },
                businessIdSet: {
                    NS: []
                },
                name: {
                    S: ''
                },
                wallet: {
                    L: [
                        {SS: []},
                        {N: ''}
                    ]
                },
            }
        }
    }

    generate = ()=> {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    handleChange = (e)=> {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e)=> {
        e.preventDefault()
        axios.post('https://objntfufkk.execute-api.us-east-1.amazonaws.com/beta/post', this.state)
            .then(response => {
                console.log(response)
            })
    }

    render() {
        const {name} = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name</label>
                        <input
                        type='text'
                        name='name'
                        value={name}
                        onChange={this.handleChange}
                        ></input>
                    </div>
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}