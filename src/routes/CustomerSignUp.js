import CustomerUserPool from "../utils/CustomerUserPool";
import React, { useState } from 'react';
import {Button, Form, Input} from "semantic-ui-react";
import {Link} from "react-router-dom";

export default () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = event => {
        event.preventDefault();

        CustomerUserPool.signUp(email, password, [], null, (err, data) => {
            if (err) console.error(err);
            console.log(data);
        });
    };

    return (
        <div>
            <h2 style={{display: 'flex', justifyContent : 'center', marginTop : '5vh'}}>Customer Signup</h2>
            <Form onSubmit={onSubmit} style={{marginTop: '15vh', marginBottom: '25vh'}}>
                <Form.Group style={{marginLeft: '73vh'}}>
                    <Form.Field
                        required
                        id='form-input-control-email'
                        control={Input}
                        label='Email'
                        placeholder='Email'
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        width={4}
                    />

                </Form.Group>

                <Form.Group style={{marginLeft: '73vh'}}>
                    <Form.Field
                        required
                        id='form-input-control-password'
                        control={Input}
                        label='Password'
                        placeholder='password'
                        type='password'
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        width={4}
                    />
                </Form.Group>

                <Form.Field
                    id='form-button-control-public'
                    control={Button}
                    basic color='green'
                    type='submit'
                >
                    <Link to="/CustomerWelcome"> Submit</Link>
                </Form.Field>
            </Form>
        </div>
    );
};