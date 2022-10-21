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
      <section>
        <form onSubmit={search}>
          <div className="input-group mb-3">
            <input
              type="search"
              className="form-control"
              list="datalistOptions"
              placeholder="Search Dictionary"
              onChange={handleWordChange}
            />

            <datalist id="datalistOptions">
              <option value="Rose"></option>
              <option value="Forest"></option>
              <option value="Mindful"></option>
            </datalist>
          </div>
        </form>
      </section>
      {/*component name (Results) property name (result) = {property value set in the state}*/}
      <Results results={result} />
    </div>
  );
}
