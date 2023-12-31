import React from "react";

export default function Contact() {

    return (
        <div className="contact-container container" data-aos="zoom-in-down">
            <h1 className="contact-header">
                CONTACT US
            </h1>
            <p className="contact-message">
                Send us a message and we’ll get back to you as soon as possible. 
                You can also reach us by phone at <span className="phone-number">(209)-227-8596</span>. And Feel free to send in your resume and we'll contact you
                if any openings are available. Looking forward to hearing from you.
            </p>
            <form action="#" className="contact-form">

                <label for="Name">Name <span className="required">-Required</span> </label>
                <input type="text" className="form-input" name="Name" placeholder=' Name' required />

                <label for="Email">Email <span className="required">-Required</span> </label>
                <input type="text" className="form-input" name="Email" placeholder=' Email' required/>
                
                <label for="Phone-number">Phone number <span className="required">-Required</span> </label>
                <input type="text" className="form-input" name="Phone-number" placeholder='Phone Number' required/>

                <label for="reason">What are you getting in touch about?</label>
                <input type="text" className="form-input" name="reason" placeholder='Reason for getting in touch' />

                <label for="description">Name <span className="required">-Required</span> </label>
                <textarea className="form-input" name="description" rows="4" cols="50" placeholder="Your message" required></textarea>
                <label for="resume">Upload your resume:</label>
                <input type="file" id="resume" name="resume" accept=".pdf, .doc, .docx" />
                <button className="form-btn">Send it</button>
            </form>
        </div>
    )
}