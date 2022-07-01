import BussinessUserPool from "../utils/BussinessUserPool";
import React, { useState } from 'react';
import {Button, Form, Input, TextArea} from "semantic-ui-react";

export default () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [bussiness, setBussiness] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');

    const onSubmit = event => {
        event.preventDefault();

        BussinessUserPool.signUp(email, password, [], null, (err, data) => {
            if (err) console.error(err);
            console.log(data);
        });
    };

    return (
        <div>
            <h2 style={{display: 'flex', justifyContent : 'center', marginTop : '5vh'}}>Business Signup</h2>
            <Form onSubmit={onSubmit} style={{marginTop: '15vh', marginBottom: '20vh'}}>
                <Form.Group style={{marginLeft: '60vh'}}>
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
                <Form.Group style={{marginLeft: '60vh'}}>
                    <Form.Field
                        required
                        id='form-input-control-business'
                        control={Input}
                        label='Business Name'
                        placeholder='Name of your Business'
                        value={bussiness}
                        onChange={event => setBussiness(event.target.value)}
                        width={4}
                    />

                    <Form.Field
                        required
                        id='form-input-control-address'
                        control={Input}
                        label='Business Address'
                        placeholder='address'
                        value={address}
                        onChange={event => setAddress(event.target.value)}
                        width={4}
                        type={'address'}
                    />
                </Form.Group>
                <Form.Group style={{marginLeft: '60vh'}}>
                    <Form.Field
                        required
                        id='form-textarea-control-description'
                        control={TextArea}
                        label='Description'
                        placeholder='Describe your business'
                        value={description}
                        onChange={event => setDescription(event.target.value)}
                        width={8}
                    />
                </Form.Group>

                <Form.Field
                    id='form-button-control-public'
                    control={Button}
                    basic color='green'
                    type='submit'
                    content='Submit'
                />
            </Form>
        </div>
    );
};