import React, { Component } from 'react';
import Navbar from './components/Navbar';
// import Header from './components/Header';
// import Main from './components/Main';
// import Footer from './components/Footer';
import './App.css';
import dbz from './dbz.json';

const randomize = array => {
  array.sort(() => {
    return 0.5 - Math.random()
  })
}

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
        <Container>
          <Row>
            <Col>
              <Main />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
