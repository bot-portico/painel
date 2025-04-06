import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import Header from './components/Header';
import CardList from './components/CardList';
import './styles/App.css';

function App() {
  const [cards, setCards] = useState([]);
  // Utilize apenas a variável de ambiente sem fallback
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/cards`);
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error('Erro ao buscar os cards:', error);
      }
    };

    fetchCards();

    const socket = io(apiUrl);
    socket.on('new_card', (newCard) => {
      setCards(prevCards => [newCard, ...prevCards]);
    });

    return () => socket.disconnect();
  }, [apiUrl]);

  return (
    <div className="App">
      <Header title="Painel de Análise de Crédito" />
      <CardList cards={cards} />
    </div>
  );
}

export default App;
