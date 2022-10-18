import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
export default function Dictionary() {
  //let [word, setWord] = useState("");
  //let [result, setResult] = useState({});
  function handleResponse(response) {
    console.log(response.data[0]);
    //setResult(response.data[0]);
  }
  function search(event) {
    event.preventDefault();
    // https://dictionaryapi.dev/ dicitonary information
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleWordChange(event) {
    //setWord(event.target.value);
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
    </div>
  );
}
