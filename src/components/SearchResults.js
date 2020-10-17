import React from 'react';
import Card from './Card';


const SearchResults = ({ results, addCardToDeck, removeCardFromDeck }) => {
	return (
		<>
		<h3>Here's what we found ({ results.length } results):</h3>

	  <div id="results">
		{ 
		  results.map(result => (
			<Card 
              key={ result.id } 
              addCardToDeck={ addCardToDeck }
              removeCardFromDeck={ removeCardFromDeck }
              {...result} />
		  ))
		}
	  </div>
	  </>
	);
  }
  
  export default SearchResults;