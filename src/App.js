import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
//import { List, Record } from 'immutable';
import SlideShow from './component/SlideShow';
class App extends Component {
  state = {
    express: null,
    companyInfo: {
      name: null,
      location: null
    },
    images: null
  };

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this._callBackendAPI()
      .then(json => this.setState({ express: json}));
    this._callCompanyInfo()
      .then(json => this.setState({companyInfo: {name: json.name, location:json.location}}));
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
      .then(json => json.express)
      .catch(err => console.error(err));
  }

  _callCompanyInfo = async () => {
    return await fetch('/companyInfo')
      .then(response => response.json())
      .then(json => json)
      .catch(err => console.error(err));
  }

  _callSlideShow = async () => {
    return await fetch('/slideshow')
      .then(response => response.json())
      .then(json => json)
      .catch(err => console.error(err));
  }

  _renderSlideShow = () => {
    const { images } = this.state;
    console.log(images);
    return <SlideShow key={0} images={images}/>;
  }

  render() {
    const { images } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* Render the newly fetched data inside of this.state.data */}
          <p className="App-intro">{this.state.express}</p>
          <p className="App-Company">name: {this.state.companyInfo.name}</p>
          <p className="App-Company">location: {this.state.companyInfo.location}</p>
          <br/>
          {images ? this._renderSlideShow() : 'slide'}
        </header>
      </div>
    );
  }
}

export default App;