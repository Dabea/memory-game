import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./componets/Card/Card";

const cardList = ["1","2","3", "4" ,"5", "6", "7" ,"8", "9", "10"];

class App extends Component {
 
  cardAlert = (message) => {
    alert(message);
  }

  randomizeCards = () => {
    var shuffled = cardList.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);
    return shuffled.map((number) => <Card color="blue" cardCount={number}  handleClick={this.cardAlert}  > </Card>)
  }

  
 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="card-grid"> 
           {this.randomizeCards()}
          
       </div>
      </div>
    );
  }
}

export default App;
