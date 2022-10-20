import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
export default function Dictionary() {
  let [word, setWord] = useState("");
  //state receives an object as that is the form in which it is in the api call
  let [result, setResult] = useState(null);
  function handleResponse(response) {
    setResult(response.data[0]);
  }
  function search(event) {
    event.preventDefault();
    // documentation: https://dictionaryapi.dev/ dicitonary information
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleWordChange(event) {
    setWord(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Search a word"
          onChange={handleWordChange}
        />
        <input type="submit" value="search" />
      </form>
      {/*component name (Results) property name (result) = {property value set in the state}*/}
      <Results results={result} />
    </div>
  );
}
