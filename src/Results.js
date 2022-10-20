import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";
export default function Results(props) {
  if (props.results) {
    return (
      <div className="Result">
        {/*displaying what is within the api call within 'word'*/}
        <h2 className="result-output"> {props.results.word}</h2>
        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
