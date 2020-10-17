//card component(template):

import React from 'react';
import './Card.css';


const Card = ({
  id,
  name,
  // type,
  // manaCost,
  // text,
  // flavor,
  imageUrl,
  addCardToDeck,
  removeCardFromDeck
}) => {
  return (
    <>
      {
        imageUrl ?
        <div className="Card">
          <div>
            <img className="preview" src={imageUrl} />
            <div className="actions">
              <button
                onClick={() => {
                  addCardToDeck({
                    id,
                    name,
                    imageUrl
                  })
                }}>
                (+)
              </button>
              <button
                onClick={() => {
                  removeCardFromDeck(
                    id
                  )
                }}>
                (-)
              </button>
            </div>

          </div>
          </div> : ''
      }
    </>
  );
}

export default Card;