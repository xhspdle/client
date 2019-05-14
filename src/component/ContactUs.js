import React, { Component } from 'react';
import './ContactUs.scss';

class ContactUs extends Component {
    
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
                        <form>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your name.."></input>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Your email.."></input>
                            <label htmlFor="message">message</label>
                            <textarea id="message" name="message" placeholder="Write something.."></textarea>
                            <input type="submit" value="Submit"></input>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactUs;