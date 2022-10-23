import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props) {
  let [word, setWord] = useState(props.defaultWord);
  //state receives an object as that is the form in which it is in the api call
  let [result, setResult] = useState(null);
  // to have a word that loads when open the dictionary,loaded state will keep track of whether page has been load which is by default false
  let [loaded, setLoaded] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function search() {
    // documentation: https://dictionaryapi.dev/ dicitonary information
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleResponse(response) {
    setResult(response.data[0]);
  }
  function handleWordChange(event) {
    setWord(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit}>
          <div className="input-group m-5">
            <input
              type="search"
              className="form-control"
              list="datalistOptions"
              onChange={handleWordChange}
              placeholder={props.defaultWord}
            />

            <datalist id="datalistOptions">
              <option value="Rose"></option>
              <option value="Forest"></option>
              <option value="Mindful"></option>
            </datalist>
          </div>
        </form>

        {/*component name (Results) property name (result) = {property value set in the state}*/}
        <Results results={result} />
      </div>
    );
  } else {
    load();
    return "loading";
  }
}
