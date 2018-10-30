import React from 'react';
import './Navbar.css'

const Navbar = props => (
    <nav>
      <ul>
        <li>
           <a className="navbar-brand" href="https://clicky-game-uft.herokuapp.com/"><h3>DBZ Memory Game</h3></a>
        </li>
        <li >
          Statement: { props.correct }
        </li>
        <li >
          <h2>Score: { props.score } | Top Score: { props.topScore }</h2>
        </li>
      </ul>
    </nav>
);

export default Navbar;
