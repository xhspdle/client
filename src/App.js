import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Portfolio from './Portfolio';
import { List, Record } from 'immutable';
import SlideShow from './component/SlideShow';

function importAll(r){
  let images = {};
  r.keys().map((item, index) => {
    return images[item.replace('./', '')] = r(item);
  });
  return images;
}
//const imagess = importAll(require.context('../static/img', false, /\.(png|jpe?g|svg|gif)$/));

//var slideIndex = 1;

class App extends Component {
  state = {
    express: null,
    companyInfo: {
      name: null,
      location: null
    },
    portfolios: {
      title: '중앙자살예방센터',
      content: '주52시간 유연근무/시간외근무'
    },
    images: []
  };

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this._callBackendAPI()
      .then(json => this.setState({ express: json}));
    this._callCompanyInfo()
      .then(json => this.setState({companyInfo: {name: json.name, location:json.location}}));
    //this.showSlides(slideIndex);
    //console.log("images: " + Object.keys(images).length);
    this.setState(
      ({ images }) => ({
        images: importAll(require.context('../static/img', false, /\.(png|jpe?g|svg|gif)$/))
      })
    );
    setTimeout(() => {
      console.log(this.state);
    }, 500);
  }

  // Fetches our GET route from the Express server. 
  // (Note the route we are fetching matches the GET route from server.js)  
  _callBackendAPI = async () => {
    return await fetch('/express_backend')
      .then(response => response.json())
      .then(json => json.express)
      .catch(err => console.error(err));
  }

  _callCompanyInfo = async () => {
    return await fetch('/companyInfo')
      .then(response => response.json())
      .then(json => json)
      .catch(err => console.error(err));
  }

  _renderPortfolios = () => {
    //  const portfolios1 = this.state.portfolios.map((portfolios1, index) => {
    //     console.log(portfolios1);
    //     return <Portfolio 
    //       title={portfolios1.title}
    //       content={portfolios1.content}
    //       img={portfolios1.img}
    //     />
    //  });
    //  return portfolios1;
    return <Portfolio 
      title={this.state.portfolios.title}
      content={this.state.portfolios.content}
    />
  } 

  _renderSlideShow = () => {
    const { images } = this.state;
   // const length = Object.keys(images).length;
    // return Object.keys(images).map((images, index) => (
    //   <SlideShow
    //     images={images}
    //     i={index+1}
    //     length={length}
    //   />
    // ));
    return <SlideShow images={images}/>;
  }
  // // Next/previous controls
  // plusSlides = (n, e) => {
  //   this.showSlides(slideIndex += n);
  // }
  // //Thumbnail image controls
  // currentSlide = (n, e) => {
  //   this.showSlides(slideIndex = n);
  // }
  // showSlides = (n, e) => {
  //   let i;
  //   let slides = document.getElementsByClassName("Slides");
  //   let dots = document.getElementsByClassName("dot");
  //   if(n > slides.length){ slideIndex = 1 }
  //   if(n < 1) { slideIndex = slides.length }
  //   for(i = 0; i < slides.length; i++){
  //     slides[i].style.display = "none";
  //   }
  //   for(i = 0; i < dots.length; i++){
  //     dots[i].className = dots[i].className.replace(" active", "");
  //   }
  //   slides[slideIndex-1].style.display = "block";
  //   dots[slideIndex-1].className += " active";
  // }

  render() {
    const { portfolios } = this.state;
    const { images } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {/* <div className="SlideContainer">
            <div className="Slides fade">
              <div className="numbertext">1 / 3</div>
              <img src={images['사나움짤.gif']} alt="사나움짤"/>
              <div className="text">Caption text</div>
            </div>
            <div className="Slides fade">
              <div className="numbertext">2 / 3</div>
              <img src={images['사나움짤2.gif']} alt="사나움짤2"/>
              <div className="text">Caption Two</div>
            </div>
            <div className="Slides fade">
              <div className="numbertext">3 / 3</div>
              <img src={images['사나움짤3.gif']} alt="사나움짤3"/>
              <div className="text">Caption Three</div>
            </div>
            <button className="prev" onClick={(e) => this.plusSlides(-1, e)}>&#10094;</button>
            <button className="next" onClick={(e) => this.plusSlides(1, e)}>&#10095;</button>
          </div>
          <br/>
          <div className="slide-dot">
            <span className="dot" onClick={(e) => this.currentSlide(1, e)}></span>
            <span className="dot" onClick={(e) => this.currentSlide(2, e)}></span>
            <span className="dot" onClick={(e) => this.currentSlide(3, e)}></span>
          </div> */}
          <img src={logo} className="App-logo" alt="logo" />
          {/* Render the newly fetched data inside of this.state.data */}
          <p className="App-intro">{this.state.express}</p>
          <p className="App-Company">name: {this.state.companyInfo.name}</p>
          <p className="App-Company">location: {this.state.companyInfo.location}</p>
          {portfolios ? this._renderPortfolios() : 'Loading...'}
          <br/>
          {images ? this._renderSlideShow() : 'slide'}
        </header>
      </div>
    );
  }
}

export default App;