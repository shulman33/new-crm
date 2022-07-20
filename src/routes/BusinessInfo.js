import React from "react";

export default function BusinessInfo(props) {

    const displayInfo = (props) => {
        const business = props;
        console.log(business);

        if (business !== undefined) {
            return (
                <div>
                    <h6>Business Name: {business.businessName}</h6>
                    <h6>Description: {business.description}</h6>
                    <h6>Address: {business.address}</h6>
                    <h6>Email: {business.email}</h6>
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