import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Character from './components/Character';
import Container from './components/Container';
import Col from './components/Col';
import Row from './components/Row';
import Footer from './components/Footer';
import './App.css';
import dbz from './dbz.json';
import Alert from "./components/Alert";

class App extends Component {
  state = {
    dbz: dbz,
    statement: '',
    score: 0,
    topScore: 0,
    clicked: []
  }

  handleOnClick = id => {

    // check if id of clicked image matches that in array
    if (!this.state.clicked.includes(id)){
      // if id not found add it to array
      this.setState({ clicked: this.state.clicked.concat(id) })

      const updatedScore = this.state.score
      // increment score
      this.setState({ score: updatedScore + 1,
      statement: "You guessed correctly!" })
      // update topscore
      if (updatedScore >= this.state.topScore){
        this.setState({ topScore: updatedScore })
      }
      if (updatedScore === 12) {
        this.setState({ statement: "You win!" })
      }
      this.setState({ dbz: this.state.dbz.sort(function(a, b) {return 0.5 - Math.random()}) })
    } else {
      // if id is found, reset game
      this.setState({ 
      dbz: dbz,
      statement: 'You guess incorrectly!',
      score: 0,
      clicked: [] })
      // this.setState({ dbz:this.state.dbz.sort(function(a, b) {return 0.5 - Math.random()}),
      // statement: "" })
    }
  }

  render() {
    return (
      <div>
        <Navbar 
        statement={ this.state.statement }
        score = { this.state.score }
        topScore = { this.state.topScore }
        />
        <div className="jumbotron text-center">
          <h1 className="display-4">Dragon Ball Z Memory Game</h1>
        </div>
        <Container>
          <Row>
            { this.state.dbz.map(character => (
            <Col size="md-3" key={character.id}>
              <Character 
              id={character.id}
              image={character.image}
              handleOnClick={this.handleOnClick} />
            </Col>
            ))}
          </Row>
        </Container>
        <Alert
            type="success"
            style={{ opacity: this.state.topScore === 12  ? 1 : 0, marginBottom: 10 }}
          >
            {this.statement}
        </Alert>
        <Footer />
      </div>
    );
  }
}

export default App;
