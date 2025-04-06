import React from 'react';
import '../styles/PriorityCard.css';

function PriorityCard({ card }) {
  return (
    <div className="priority-card">
      <div className="card-header">
        <h2>{card.nome}</h2>
      </div>
      <div className="card-body">
        <p><strong>CPF:</strong> {card.cpf}</p>
        <p><strong>Construtora:</strong> {card.construtora}</p>
        <p><strong>Potencial de Crédito:</strong> {card.potencialCredito}</p>
        <p><strong>Número na Fila:</strong> {card.numeroFila}</p>
      </div>
    </div>
  );
}

export default PriorityCard;
