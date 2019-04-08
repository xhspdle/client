import React, { Component } from 'react';
import './App.scss';

class Portfolio extends Component{
    static defaultProps = {
        title: '기본'
    }
    render(){
        return (
            <div className="Portfolio">
                <div className="Portfolio-col">
                    <img 
                    src={this.props.img} 
                    alt={this.props.title} 
                    title={this.props.title} 
                    className="Portfolio-img"/>
                </div>
                <div className="Portfolio-col">
                    <h2 className="Portfolio-title">{this.props.title}</h2>
                    <p className="Portfolio-content">{this.props.content}</p>
                </div>
            </div>
        );
    }
}

export default Portfolio;