import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import {
    DeckList,
    SearchBar,
    SearchResults
  } from './components';

import {
    fetchCards,
  } from './api';

import './index.css';

/* We need to be able to communicate between the SearchResults
   and the DeckList, so we'll have to have the state at a common ancestor,
   so we can set it in the App component:
*/
  const App = () => {
    const [results, setResults] = useState([]);
    const [deck, setDeck] = useState([]);

    //different state changes for deck:

    //add cards:
    const addCardToDeck = ({ id, name }) =>{
        const nextDeck = [...deck];
        //duplicate deck.
        const index = nextDeck.findIndex(card => card.id === id);
        //then find the specified card
        
        // index will be -1 if spec card is not found
        if (index > -1) {
            nextDeck[index].count += 1;
            //yo kait what does this do/mean?
          } else {
            //if you find the spec card, push it in your copy.
            nextDeck.push({
              id,
              name,
              count: 1
            });
          }
          //set deck state to that of duplicate
          //indirect changes, as not to mutate state.
          //state is CONSTANT and yet ever changing**
          setDeck(nextDeck);
    }
    //remove cards:
    const removeCardFromDeck = ({ id }) =>{
        const nextDeck = [...deck];
        //copy.
        const index = nextDeck.findIndex(card => card.id === id);
        //search.

        //if nothing nothing:
        if (index === -1) {
            return;
          }
        
        //destroy.
        if (nextDeck[index].count === 1) {
            // remove the card altogether
            nextDeck.splice(index, 1);
          } else {
            // decrement the count
            nextDeck[index].count -= 1;
          }
          
          //set state:
          setDeck(nextDeck);
    }

    //I understand this is where we are compiling.
    //why is 
    return (
      <div id="app">
        {/* <img src="https://99percentinvisible.org/app/uploads/2019/01/Magic-the-Gathering.jpg"></img> */}
        <SearchBar setResults={ setResults } />
        <SearchResults results={ results }
                       addCardToDeck={ addCardToDeck }
                       removeCardFromDeck={ removeCardFromDeck } />
        <DeckList deck={ deck } />
      </div>
    );
  }

//A component is just a function, and the return value of that function
//is the JSX template which is used to build the HTML for your page. !!!!!!!!!

ReactDOM.render(
  <img id="headerimg" src="https://www.corbytechnicalschool.org/_files/images/B34A44C0A7347024A4D703C82A9B5BB9.gif"></img>,
  document.getElementById('Header')
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
