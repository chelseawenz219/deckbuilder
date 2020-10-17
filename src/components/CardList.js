import React, {useState} from 'react';

import {
    SearchBar,
    SearchResults
  } from './index';

const CardList = ({ deck, setDeck }) => {
    const [results, setResults] = useState([]);


    //add cards:
    const addCardToDeck = ({ id, name, imageUrl}) =>{
        const nextDeck = [...deck];
        const index = nextDeck.findIndex(card => card.id === id);

        if (index > -1) {
            nextDeck[index].count += 1;
          } else {
            //if you find the spec card, push it in your copy.
            nextDeck.push({
              id,
              name,
              imageUrl,
              count: 1
            });
          }

          setDeck(nextDeck);
    }
    //remove cards:
    const removeCardFromDeck = ( id ) =>{
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

    return (
      <div id="app">
        {/* <img src="https://99percentinvisible.org/app/uploads/2019/01/Magic-the-Gathering.jpg"></img> */}
        <SearchBar setResults={ setResults } />
        <SearchResults results={ results }
                       addCardToDeck={ addCardToDeck }
                       removeCardFromDeck={ removeCardFromDeck } />
      </div>
    );
  }

  export default CardList;