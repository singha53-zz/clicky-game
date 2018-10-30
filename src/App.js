import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Character from './components/Character';
// import Footer from './components/Footer';
import './App.css';
import dbz from './dbz.json';
import Methods from './utils/functions'

class App extends Component {
  state = {
    dbz,
    statement: ',
    score: 0,
    topScore: 0,
    clicked: []
  }

  handleOnClick = id =>{
    // check if id of clicked image matches that in array
    if (this.state.clicked.includes(id)){
      // if id not found add it to array
      this.setState({ clicked: this.state.clicked.concat(id) })

      const updatedScore = this.state.score
      // increment score
      this.setState({ score: updatedScore + 1,
      statement: "You guessed correctly!" })
      // update topscore
      if (updatedScore > this.state.topScore){
        this.setState({ this.setState({ this.state.topScore = updatedScore })})
      } else if (updatedScore === 12) {
        this.setState({ statement = "You win!" })
      }
      this.setState({ dbz: Methods.randomize(dbz) })
    } else {
      // if id is found, reset game
      this.setState({ 
      dbz,
      statement: 'You guess incorrectly!',
      score: 0,
      clicked: [] })
      this.setState({ dbz: Methods.randomize(dbz),
      statement: "" })
    }
  }

  render() {
    return (
      <div>
        <Navbar 
        correct={ this.state.statement }
        score = { this.state.score }
        topScore = { this.state.topScore }
        />
        <div className="jumbotron text-center">
          <h1 className="display-4">Dragon Ball Z Memory Game</h1>
        </div>
        <Container>
          <Row>
            { this.state.dbz.map(character => {
            <Col>
              <Character 
              key={character.id}
              image={character.image}
              handleClick={this.handleClick}
              />
            </Col>
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
