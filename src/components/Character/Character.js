import React from 'react';
import './Character.css';

const Character = props => (
  <div 
  className="card" 
  value={props.id} 
  onClick={ () => { props.handleOnClick(props.id) }}>
    <div className="img-container">
      <img alt="" src={props.image} />
    </div>
  </div>
);

export default Character;