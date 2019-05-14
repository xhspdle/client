import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import './VideoSlide.scss';

//var slideIndex = 1;

class VideoSlide extends Component {

    state = {

    }
    componentDidMount(){
        //this._typeLogo();
    }
    // _typeLogo = (n, e) => {
    //     const logo = ['D', 'e', 'v', '-', 'J', 'i', 't', 's', 'u'];
    //     let type = '';
    //     for(let i of logo ){
    //         type += i;
    //         document.getElementById("typeLogo");
    //         setTimeout(() => {}, 500);
    //     }
    // }
    render(){
        //const logo = ['D', 'e', 'v', '-', 'J', 'i', 't', 's', 'u'];
        return (
            <React.Fragment>
                <video autoPlay muted loop id="myVideo">
                    <source src={require('../static/vid/home1.mp4')} type="video/mp4"></source>
                </video>
                <div className="content">
                    <h1 id="typeLogo">Dev-Jitsu</h1>
                </div>
            </React.Fragment>
        );
    }
}

export default VideoSlide;