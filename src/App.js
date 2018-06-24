import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./componets/Card/Card";

class App extends Component {
 
  cardAlert = (message) => {
    alert(message);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="card-grid"> 
          <Card color="blue" cardCount="1"  handleClick={this.cardAlert}  > </Card>
          <Card color="green" cardCount="2"  handleClick={this.cardAlert}  > </Card>
       </div>
      </div>
    );
  }
}

export default App;
