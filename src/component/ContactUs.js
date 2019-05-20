import React, { Component } from 'react';
import './ContactUs.scss';

class ContactUs extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value
        };
        console.log(data);
        fetch("/contact/insert", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then((response) => {
              if(response.status >= 400) {
                  throw new Error("Bad response from server");
              }
              return response.json();
        }).then((json) => {
            console.log(json);
            document.contact.reset();
        }).catch(err => console.error(err));
    }

    state = {}

    render(){
        return (
            <div className="ContactUs" id="contact">
                <div className="ContactUs-header">
                    <h2>Contact Us</h2>
                    <p>Swing by for a cup of coffee, or leave us a message</p>
                </div>
                <div className="ContactUs-row">
                    <div className="ContactUs-column">
                        <img src={require('../static/img/map1.PNG')} alt="map"></img>
                    </div>
                    <div className="ContactUs-column">
                        <form onSubmit={(e) => this.handleSubmit(e)} name="contact">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your name.."></input>
                            <label htmlFor="email">Email</label>
                            <input require="true" type="email" id="email" name="email" placeholder="Your email.."></input>
                            <label htmlFor="message">message</label>
                            <textarea require="true" id="message" name="message" placeholder="Write something.."></textarea>
                            <input type="submit" value="Submit"></input>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactUs;