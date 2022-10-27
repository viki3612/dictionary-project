import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [word, setWord] = useState(props.defaultWord);
  //state receives an object as that is the form in which it is in the api call
  let [result, setResult] = useState(null);
  // to have a word that loads when open the dictionary,loaded state will keep track of whether page has been load which is by default false
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function search() {
    // documentation: https://dictionaryapi.dev/ dicitonary information
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
    let pexelsApiKey =
      "563492ad6f91700001000001ca29f16adf9545ae98988280416b1057";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers }).then(handlePexelResponse);
  }
  function handleResponse(response) {
    setResult(response.data[0]);
  }
  function handlePexelResponse(response) {
    setPhotos(response.data.photos);
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
        <section>
          <h1 className="Dictionary-Title">Dictionary</h1>
          <h2 className="Which-Word">What word do you want to look up?</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="search"
                className="form-control"
                list="datalistOptions"
                onChange={handleWordChange}
                defaultValue={props.defaultWord}
              />

              <datalist id="datalistOptions">
                <option value="Rose"></option>
                <option value="Forest"></option>
                <option value="Mindful"></option>
              </datalist>
              <button class="btn btn-primary" type="submit">
                Search
              </button>
            </div>
          </form>
        </section>
        {/*component name (Results) property name (result) = {property value set in the state}*/}
        <Results results={result} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "loading";
  }
}
