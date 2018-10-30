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
        {/* <Header />
        <Main />
        <Footer /> */}
      </div>
    );
  }
}

export default App;
