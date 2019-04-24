import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
//import { List, Record } from 'immutable';
import SlideShow from './component/SlideShow';
import ShrinkNavbar from './component/ShrinkNavbar';
import ParallaxScroll from './component/ParallaxScroll';

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
    return await fetch('/slideshow')
      .then(response => response.json())
      //.then(json => json)
      .catch(err => console.error(err));
  }

  render() {
    const { images, companyInfo, express } = this.state;
    return (
      <React.Fragment>
        <ShrinkNavbar></ShrinkNavbar>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p className="App-intro">
              {express ? this.state.express : 'loading'}
            </p>
            <p className="App-Company">
              name: { companyInfo ? this.state.companyInfo.name : 'loading'}
            </p>
            <p className="App-Company">
              location: {companyInfo ? this.state.companyInfo.location : 'loading'}
            </p>
            <br/>
            {images ? <SlideShow images={images}/> : 'slide'}
          </header>
        </div>
        <ParallaxScroll></ParallaxScroll>
      </React.Fragment>
    );
  }
}

export default App;