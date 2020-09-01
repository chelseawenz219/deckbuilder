import React from 'react';

const DeckList = ({ deck }) => {
	let cardCount = deck.reduce((cardCount, card) => {
		  return cardCount + card.count
		}, 0);
		/* explaining the above:
		So... count is a property of a single card object in the deck array.
		It represents the count of that specific card. And cardCount is the
		total number of cards in our deck (regardless of card type). Since our 
		component re-renders each time deck updates, both these counts will update, as well.
		*/

	return (
		<div id="deck">
		<h3>Your deck so far ({ cardCount } cards):</h3>
		<div className="DeckList">
		{
		
		deck.map(card => (
		  <p key={ card.id }>
			({ card.count }x) { card.name }
		  </p>
		))
		
		}
		</div>
	  </div>
	);
};

export default DeckList;