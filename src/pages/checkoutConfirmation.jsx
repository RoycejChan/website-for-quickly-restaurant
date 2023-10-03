import React from "react";


export default function Confirmation(data) {
    console.log(data);
    console.log("ADADASD");
        return (
            <div className="order-confirmation-container">
                <div className="confirmation-header">
                    <h1>Thank you for your order</h1>
                    <p>An email confirmation has been sent to {data.email}</p>
                    <h1>WEBSITE STILL IN PROGRESS</h1>
                </div>
            </div>
            )
}