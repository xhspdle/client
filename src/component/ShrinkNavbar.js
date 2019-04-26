import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import './ShrinkNavbar.scss';

class ShrinkNavbar extends Component {
    
    componentDidMount() {
        window.onscroll = () => {this._scrollFunction()};
    }
    
    _scrollFunction = () => {
        let logo = document.getElementById("logo");
        let navbarRight = document.getElementById("navbar-right");
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
            document.getElementById("navbar").style.padding = "30px 10px";
            logo.style.fontSize = "25px";
            logo.style.opacity = "1";
            navbarRight.style.opacity = "1";
        }else{
            document.getElementById("navbar").style.padding = "80px 10px";
            logo.style.fontSize = "35px";
            logo.style.opacity = "0";
            navbarRight.style.opacity = "0";
        }
    }
    
    _responsiveNav = (e) => {
        let x = document.getElementById('navbar-right');
        if (x.className === 'nav'){
            x.className += ' responsive';
        }else{
            x.className = 'nav';
        }
    }

    render(){

        return (
            <React.Fragment>
                <link rel='stylesheet' href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <div id="navbar">
                    <a href="#default" id="logo">
                    Dev-Jitsu
                    </a>
                    <div className="nav" id="navbar-right">
                        <a href="#root">Home</a>
                        <a href="#about">About</a>
                        <a href="#contact">Contact</a>
                        <a href="#icon" className="icon" onClick={(e) => { this._responsiveNav(e)}}>
                            <i className="fa fa-bars"></i>
                        </a>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ShrinkNavbar;