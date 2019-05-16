import React, { Component } from 'react';
import './App.scss';
//import logo from './logo.svg';
//import { List, Record } from 'immutable';
//import SlideShow from './component/SlideShow';
import ShrinkNavbar from './component/ShrinkNavbar';
import ParallaxScroll from './component/ParallaxScroll';
import VideoSlide from './component/VideoSlide';
import ContactUs from './component/ContactUs';

class App extends Component {
  state = {
    // express: null,
    // companyInfo: {
    //   name: null,
    //   location: null
    // },
    // images: null
  };

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this._callBackendAPI()
      .then(json => this.setState({ express: json.express}))
      .catch(err => console.error(err));
    this._callCompanyInfo()
      .then(json => this.setState({companyInfo: {name: json.name, location:json.location}}))
      .catch(err => console.error(err));
    this._callSlideShow()
    .then(json => this.setState({ images: json }));
    /* this._callSlideShow() //static.json파일 자체를 db로 관리하는 방법
    .then(json => this.setState({ images: json.img })); */
    setTimeout(() => {
      console.log(this.state);
    }, 500);
  }

  // Fetches our GET route from the Express server. 
  // (Note the route we are fetching matches the GET route from server.js)  
  _callBackendAPI = async () => {
    return await fetch('/express_backend')
      .then(response => response.json())
      //.then(json => json)
      .catch(err => console.error(err));
  }

  _callCompanyInfo = async () => {
    return await fetch('/companyInfo')
      .then(response => response.json())
      //.then(json => json)
      .catch(err => console.error(err));
  }

  _callSlideShow = async () => {
    return await fetch('/slideshow_MySQL'/* '/slideshow */)
      .then(response => response.json())
      //.then(json => json)
      .catch(err => console.error(err));
  }

  render() {
    //const { images, companyInfo, express } = this.state;
    return (
      <React.Fragment>
        <ShrinkNavbar></ShrinkNavbar>
        <VideoSlide></VideoSlide>
        {/* <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p className="App-intro">
              {express ? express : 'loading'}
            </p>
            <p className="App-Company">
              name: { companyInfo ? companyInfo.name : 'loading'}
            </p>
            <p className="App-Company">
              location: {companyInfo ? companyInfo.location : 'loading'}
            </p>
            <br/>
            {images ? <SlideShow images={images}/> : 'slide'}
          </header>
        </div> */}
        <ParallaxScroll></ParallaxScroll>
        <ContactUs></ContactUs>
      </React.Fragment>
    );
  }
}

export default App;