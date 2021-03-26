import React from 'react'

export default function Contact() {
    return (
        <div className="contact-component">
            <div className="contact-title">
                <h2>Get in touch</h2>
                <p>The requested solution does not require hosting and should run locally. Therefore, the source code must be available to ConnectNow and the solution must build and run on the assessor’s workstation.</p>
            </div>
            <form>
                <h3>Contact Form</h3>
                <label htmlFor="personName">Name</label>
                <input type="text" id="personName" name="personName"></input>
                <div className="spacer"></div>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email"></input>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message"></textarea>
                <div className="submit-btn">Send</div>
            </form>
        </div>
    )
}
