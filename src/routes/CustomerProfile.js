import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";

function CustomerProfile() {

    const [customer, setCustomer] = useState(null);
    const email = localStorage.getItem('userId');

    useEffect(() => {
        axios.post('https://e4zbw0wbnk.execute-api.us-east-1.amazonaws.com/test/get', jsonData)
            .then(response => {
                console.log(email)
                console.log(response);
                setCustomer(response.data);
            })
    }, []);

    const jsonData = {
        "TableName": "CustomerUserDB",
        "Key": {
            "customerId": {
                "S": email
            }
        }
    }

    if (!customer) {
        return (
            <p>There is no information to display at this time</p>
        )
    }

    return (
        <div>
            <p>Info</p>
            <p>Name: {customer.Item.firstName.S} {customer.Item.lastName.S}</p>
            <p>Email: {customer.Item.email.S}</p>
        </div>
    )
}

export default React.memo(CustomerProfile);