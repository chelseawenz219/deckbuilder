import React from 'react';
import Card from './Card';
import './SearchResults.css';


const SearchResults = ({ results, addCardToDeck, removeCardFromDeck }) => {
	return (
	  <div id="results">
		<h3>Here's what we found ({ results.length } results):</h3>
		{ 
		
		//mapping the array of cards:
		//mapping our results into our template.
		//our template takes in ...results (all of the props, every key/val pair);
		  results.map(result => (
			<Card 
              key={ result.id } 
              addCardToDeck={ addCardToDeck }
              removeCardFromDeck={ removeCardFromDeck }
              {...result} />
		  ))
		  //yo kait can you explain mapping to me again here too..
		  //In this way we quickly add a lot of props to the Card,
		  // and can then read them off inside the Card component definition.


		}
	  </div>
	);
  }
  
  export default SearchResults;