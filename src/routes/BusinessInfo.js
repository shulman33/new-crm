import React from "react";

export default function BusinessInfo(props) {

    const displayInfo = (props) => {
        const business = props;
        console.log(business);

        if (business.length > 0) {
            return (
                <div>
                    <p>Business Name: {business.businessName.S}</p>
                    <p>Description: {business.description.S}</p>
                    <p>Address: {business.address.S}</p>
                    <p>Email: {business.email.S}</p>
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