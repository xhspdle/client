import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SlideShow.scss';

var slideIndex = 1;

class SlideShow extends Component {
    static defaultProps = {
        images: null
    }
    static propTypes = {
        images: PropTypes.array.isRequired
    }
    state = {
        //isLoading: false
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
        //const { images } = this.props.images; 이렇게하면 에러남 비구조화할당
        const { images } = this.props;
        console.log('slideshow images: ' + images);
        return (
            <React.Fragment>
                <div className="SlideContainer">
                    {images.map((array, index) => {
                        return (
                            <Slides key={index} images={array.pic_id} ext={array.pic_extension} i={index} length={images.length}/>
                        );
                    })}
                    {/* Next and previous buttons */}
                    <button className="prev" onClick={(e) => this._plusSlides(-1, e)}>&#10094;</button>
                    <button className="next" onClick={(e) => this._plusSlides(1, e)}>&#10095;</button>
                </div>
                <div className="slide-dot">
                    {images.map((array, index) => {
                       return (
                        <span key={index} className="dot" onClick={(e) => this._currentSlide(index+1, e)}></span>
                       );
                    })}
                </div>
            </React.Fragment>
        );
    }
}

const Slides = (props) => {
    console.log('props: ' + props.images + '.' + props.ext);
    return (
        <div className="Slides fade">
            <div className="numbertext">{props.i+1} / {props.length}</div>
            <img src={require(`../static/img/${props.images}.${props.ext}`)} alt={"slide" + props.i+1}/>
            <div className="text">{"Caption " + parseInt(props.i+1)}</div>
        </div>
    );
}

export default SlideShow;