import React, { Component } from 'react';
import Navbar from './components/Navbar';
// import Header from './components/Header';
// import Main from './components/Main';
// import Footer from './components/Footer';
import './App.css';

class App extends Component {
  state = {
    correct: false,
    score: 0,
    topScore: 0
  }

  render() {
    return (
      <div>
        <Navbar 
        correct={ this.state.correct }
        score = { this.state.score }
        topScore = { this.state.topScore }
        />
        <div className="jumbotron text-center">
          <h1 className="display-4">Dragon Ball Z Memory Game</h1>
        </div>
        {/* <Header />
        <Main />
        <Footer /> */}
      </div>
    );
  }
}

export default App;
