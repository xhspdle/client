import React, { Component } from 'react';
import './App.scss';

class Portfolio extends Component{
    static defaultProps = {
        title: '기본'
    }
    render(){
        return (
            <div className="Portfolio">
                <div className="Portfolio-imgList">
                    <img 
                    src={this.props.img} 
                    alt={this.props.title} 
                    title={this.props.title} 
                    className="Portfolio-img"/>
                </div>
                
            </div>
        );
    }
}

export default Portfolio;