import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    data: null,
    companyInfo: {
      name: null,
      location: null
    }
  };

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this._callBackendAPI()
      .then(res => this.setState({ data: res.express}))
      .catch(err => console.error(err));
    this._callCompanyInfo()
      .then(res => this.setState({companyInfo: {name: res.name, location: res.location}}))
      .catch(err => console.error(err));
  }

  // Fetches our GET route from the Express server. 
  // (Note the route we are fetching matches the GET route from server.js)
  _callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if(response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };
  
  _callCompanyInfo = async () => {
    const response = await fetch('/companyInfo');
    const body = await response.json();

    if(response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {/* Render the newly fetched data inside of this.state.data */}
          <p className="App-intro">{this.state.data}</p>
          <p className="App-Company">name: {this.state.companyInfo.name}</p>
          <p className="App-Company">location: {this.state.companyInfo.location}</p>
        </header>
      </div>
    );
  }
}

export default App;