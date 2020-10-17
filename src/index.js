import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CardList from './components/CardList';
import DeckList from './components/DeckList';

import './index.css';

function AppRouter () {
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    const localStorageDeck = localStorage.getItem('deck')
    if (localStorageDeck) {
      setDeck(JSON.parse(localStorageDeck))
    }
  }, [])

  const onDeckChange = (deck) => {
    localStorage.setItem('deck', JSON.stringify(deck))
    setDeck(deck)
  }

  return (
    <Router>
      <Route path="/deckbuilder/" exact render={() => <CardList deck={deck} setDeck={onDeckChange} />} />
      <Route path="/deckbuilder/deck" render={() => <DeckList deck={deck} setDeck={onDeckChange} />} />
    </Router>
  )
}


ReactDOM.render(
  <a href="/">
      <img id="headerimg" src="https://www.corbytechnicalschool.org/_files/images/B34A44C0A7347024A4D703C82A9B5BB9.gif"></img>
  </a>,
  document.getElementById('Header')
)

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root')
);
