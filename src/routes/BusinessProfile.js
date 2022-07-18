import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import BusinessInfo from "./BusinessInfo";

export default function BusinessProfile() {

    const [business, setBusiness] = useState('');
    const email = localStorage.getItem('userId');

    useEffect(() => {
        getBusiness();
    });

    const jsonData = {
        "TableName": "BusinessUserDB",
        "Key": {
            "businessId": {
                "S": email
            }
        }
    }

    const getBusiness = () => {
        axios.post('https://e4zbw0wbnk.execute-api.us-east-1.amazonaws.com/test/get', jsonData)
            .then(response => {
                const businessData = response.data.Item;
                setBusiness(businessData);
                //console.log(business);
                //console.log(businessData);
                //console.log(response);
                //console.log(email);
            });
    }

    return (
        <BusinessInfo business={business}/>
    )
}