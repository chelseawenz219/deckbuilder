import React, { useState, useEffect } from 'react';

import {
  fetchCards,
  fetchTypes
} from '../api';

import './SearchBar.css';

//searchBar: takes in setResults
//based on two search fields: name and text.
//I want to add categories.

const SearchBar = ({ setResults }) => {
	//set name and text "states":
	const [name, setName] = useState('');
	const [text, setText] = useState('');
	//setting a state for category dropdown menu:
	const [types, setType] = useState('');
	const [allTypes, setAllTypes] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
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

	useEffect(async ()=>{
		setIsLoading(true);
		setAllTypes(await fetchTypes());
		setIsLoading(false);
	}, []);

	console.log("types", allTypes);
	
	//attach update to submit(event);
  async function handleSubmit(event) {
	 //prevent default, as you would in any form submission.
	event.preventDefault();
	//fetch cards:
	const cards = await fetchCards({
		name,
		text,
		types,
	});

	console.log("cards", cards);

	//update array(state) to contain cards(array);
    setResults(cards);
  }

  return (
    <div id="search">
      <h3>Look up cards here...</h3>
      <form onSubmit={ handleSubmit } >
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
		  isLoading ? <select id="dropDown">
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
    </div>
  );
}

//onChange, onSubmit, onClick:
//these are the three types of event handlers we use in react.
//onChange = whenever the input/value changes.
//onSubmit = upon form submission.
//onClick = manually toggle, usually attached to button.

export default SearchBar;