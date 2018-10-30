import React from 'react';

const Navbar = props => (
  <div>
    <nav className = "navbar">
      <ul>
        <li className="brand">
          <a href="/">Clicky game</a>
        </li>
        <t 
        score={props.score} 
        topScore={props.topScore} >
          <li className={ props.correct ? "correct" : "" }>{ props.correct ? "You guessed correctly!" : "You guessed incorrectly!"}</li>
        </t>
        <li>
          `Score: ${props.score} | Top Score: ${props.topScore}`
        </li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
