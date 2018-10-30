import React from 'react';
import './Navbar.css'

const Navbar = props => (
    <nav>
      <ul>
        <li>
           <a className="navbar-brand" href="/"><h3>DBZ Memory Game</h3></a>
        </li>
        <li >
          { props.statement }
        </li>
        <li >
          <h2>Score: { props.score } | Top Score: { props.topScore }</h2>
        </li>
      </ul>
    </nav>
);

export default Navbar;
