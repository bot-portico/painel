import React from 'react';
import PriorityCard from './PriorityCard';
import '../styles/CardList.css';

function CardList({ cards }) {
  return (
    <div className="card-list">
      {cards.map((card, index) => (
        <PriorityCard key={index} card={card} />
      ))}
    </div>
  );
}

export default CardList;
