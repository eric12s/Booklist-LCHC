import React from 'react';
import './Card.css';

const Card = ({ title, children, key }) => {
  return (
    <div className="card" key={key}>
      <div className="container">
        <h4><b>{title}</b></h4>
          {children}
      </div>
    </div>
  );
}

export default Card;