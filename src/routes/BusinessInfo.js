import React from "react";

export default function BusinessInfo(props) {

    const displayInfo = (props) => {
        const business = props;
        console.log(business);

        if (business !== undefined) {
            return (
                <div>
                    <p>Business Name: {business.businessName}</p>
                    <p>Description: {business.description}</p>
                    <p>Address: {business.address}</p>
                    <p>Email: {business.email}</p>
                </div>
            )
        } else {
            return (
                <div>
                    <p>There is no information to display at this time.</p>
                </div>
            )
        }
    }

    return (
        <>
            {displayInfo(props)}
        </>
    )
}