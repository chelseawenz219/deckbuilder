import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom'

import {
  fetchCards,
  fetchTypes
} from '../api';

import './SearchBar.css';

const SearchBar = ({ setResults }) => {
	//set name and text "states":
	const [name, setName] = useState('');
	const [text, setText] = useState('');
	//setting a state for category dropdown menu:
	const [types, setType] = useState('');
	const [allTypes, setAllTypes] = useState([]);
	const [isDropdownLoading, setIsDropDownLoading] = useState(false);
	const [areCardsLoading, setAreCardsLoading] = useState(false);
	// console.log("allTypes", allTypes);
	//updating name state:
	//(event handler);
	const handleNameChange = event => {
		setName( event.target.value );
	}
	//updating text state:
	//(event handler);
	const handleTextChange = event => {
		setText( event.target.value );
	  }
	
	const handleTypeChange = event => {
		setType( event.target.value );
		console.log("etv", event.target.value);
	}

	useEffect(()=>{
		setIsDropDownLoading(true);
		
		fetchTypes().then((resp) => {
			setAllTypes(resp)

			setIsDropDownLoading(false)
		})
	}, []);

	console.log("types", allTypes);
	
	//attach update to submit(event);
  async function handleSubmit(event) {
	 //prevent default, as you would in any form submission.
	event.preventDefault();
	setAreCardsLoading(true)
	//fetch cards:
	const cards = await fetchCards({
		name,
		text,
		types,
	});

	console.log("cards", cards);

	//update array(state) to contain cards(array);
	setResults(cards);
	setAreCardsLoading(false)
  }

  if (areCardsLoading) {
	  return <img id="loadingImg" src="https://media.giphy.com/media/7NOZThmc5NOrKSwkxl/giphy.gif" />
  }

  return (
    <div id="search">
      <form onSubmit={ handleSubmit } >
	  <h3>Look up cards here...</h3>
		<input 
		  className="searchBar"
          type="text" 
          placeholder="card name"
          value={ name }
          onChange={ handleNameChange } />
        <input
		  className="searchBar"
          type="text"
          placeholder="card text"
          value={ text }
          onChange={ handleTextChange } />
		  	{
		  isDropdownLoading ? <select id="dropDown">
			  <option value="" disabled selected hidden>Select A Type...</option>
					  </select>
						   : <select id="dropDown" onChange={ handleTypeChange }>
		  			         <option value="" disabled selected hidden>Select A Type...</option>
					{
							allTypes.map((type, index) => {
								return <option key={index}value={type}>{type}</option>
								})
					}
							 </select>
			}
        <button id="button" type="submit" >Search</button>
      </form>

	  <Link id="deckbutton" to="/deck">My Deck </Link>
    </div>
  );
}

//onChange, onSubmit, onClick:
//these are the three types of event handlers we use in react.
//onChange = whenever the input/value changes.
//onSubmit = upon form submission.
//onClick = manually toggle, usually attached to button.

export default SearchBar;