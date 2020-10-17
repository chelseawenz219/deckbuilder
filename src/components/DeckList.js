import React from 'react';

const DeckList = ({ deck, setDeck }) => {

	let cardCount = deck.reduce((cardCount, card) => {
		  return cardCount + card.count
		}, 0);

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

			  setDeck(nextDeck);
		}

		console.log("hello deck", ...deck)
	return (
		<>
		<h3>Your deck so far ({ cardCount } cards):</h3>

		<div id="deck">

		<div className="DeckList">
		{
		deck.map(card => (
			
			<div className="Card">
			  <div>
				<img className="preview" src={card.imageUrl} />
				<div className="actions">
				  <button
					onClick={() => {
					  removeCardFromDeck(card.id)
					}}>
					(-)
				  </button>
				</div>
			  </div>
			</div>
		))		
		}
		</div>
		</div>
		</>
)}

export default DeckList;