import React, { Component } from 'react';

var slideIndex = 1;

class SlideShow extends Component {
    static defaultProps = {
        images: null
    }
    componentDidMount() {
        this._showSlides(slideIndex);
    }
    // Next/previous controls
    _plusSlides = (n, e) => {
        this._showSlides(slideIndex += n);
    }
    //Thumbnail image controls
    _currentSlide = (n, e) => {
        this._showSlides(slideIndex = n);
    }
    _showSlides = (n, e) => {
        let i;
        let slides = document.getElementsByClassName("Slides");
        let dots = document.getElementsByClassName("dot");
        if(n > slides.length){ slideIndex = 1 }
        if(n < 1) { slideIndex = slides.length }
        for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
        }
        for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
    }
    render(){
        const { images } = this.props.images;
        const length = Object.keys(images).length;
        return (
            <React.Fragment>
                <div className="SlideContainer">
                    {Object.keys(images).map((images, index) => {
                        return (
                            <Slides images={images} i={index} length={length}/>
                        );
                    })}
                    {/* <Slides images={images} i={this.props.i} length={this.props.length}/> */}
                    {/* Next and previous buttons */}
                    <button className="prev" onClick={(e) => this._plusSlides(-1, e)}>&#10094;</button>
                    <button className="next" onClick={(e) => this._plusSlides(1, e)}>&#10095;</button>
                </div>
                <br/>
                <div className="slide-dot">
                    <Dots i={this.props.i}/>
                </div>
            </React.Fragment>
        );
    }
}

const Slides = (props) => {
    return (
        <div className="Slides fade">
            <div className="numbertext">{props.i} / {props.length}</div>
            <img src={props.images} alt={"slide" + props.i}/>
            <div className="text">{"Caption " + props.i}</div>
        </div>
    );
}

const Dots = (props) => {
    return (
        <React.Fragment>
            <span className="dot" onClick={(e) => this._currentSlide(props.i, e)}></span>
        </React.Fragment>
    );
}

export default SlideShow;