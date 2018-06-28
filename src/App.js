import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./componets/Card/Card";



class App extends Component {
  state = {
    cardList: ["1","2","3", "4" ,"5", "6", "7" ,"8", "9", "10", "13", "12"],
    chosen: [],
    score: 0,
    highScore: 0
  }
 
  cardAlert = (message) => {
    alert(message);
  }

  randomizeCards = () => {
    var shuffled = this.state.cardList.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);
    this.setState({
      cardList : shuffled
    });
    
  }

  handleClick = (icon) => {
    if(this.state.chosen.includes(icon)){
      alert("Game Over");
      this.setState({
        chosen : [],
        score: 0
      })
    }else{
      this.state.chosen.push(icon);
      console.log(this.state.chosen)
      this.randomizeCards()
      this.setState((prevState) => {
        score:  prevState.score++
      })
    }
  }
  
 componentDidMount(){
   this.randomizeCards();
 }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"></h1>
          <div > Score:{this.state.score} </div>
        </header>
        <div className="card-grid"> 
          {this.state.cardList.map( (card) => <Card key={card} cardCount={card} handleClick={this.handleClick}  > </Card>)}
       </div>
      </div>
    );
  }
}

export default App;
