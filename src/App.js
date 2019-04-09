import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Portfolio from './Portfolio';
import { Map, List } from 'immutable';


class App extends Component {
  state = {
    data: Map({
      input: '',
      users: List([
        Map({
          id: 1,
          username: 'ldk'
        }),
        Map({
          id: 2,
          username: 'dd2'
        })
      ])
    }),
    express: null,
    companyInfo: {
      name: null,
      location: null
    },
    portfolios: {
      title: '중앙자살예방센터',
      content: '주52시간 유연근무/시간외근무'
    }
  };

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this._callBackendAPI()
      .then(json => this.setState({ express : json}));
    this._callCompanyInfo()
      .then(json => this.setState({companyInfo: {name: json.name, location:json.location}}));
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
     const portfolios = this.state.portfolios.map((portfolios, index) => {
        console.log(portfolios);
        return <Portfolio 
          title={portfolios.title}
          content={portfolios.content}
          img={portfolios.img}
        />
     });
     return portfolios;
  }

  render() {
    const { portfolios } = this.state.portfolios;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* Render the newly fetched data inside of this.state.data */}
          <p className="App-intro">{this.state.express}</p>
          <p className="App-Company">name: {this.state.companyInfo.name}</p>
          <p className="App-Company">location: {this.state.companyInfo.location}</p>
          {portfolios ? this._renderPortfolios() : 'Loading...'}
          
        </header>
      </div>
    );
  }
}

export default App;