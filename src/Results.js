import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";
import Synonyms from "./Synonyms";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Result">
        <h2 className="result-output">
          {/*displaying what is within the api call within 'word'*/}
          {props.results.word}
        </h2>
        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}

        <div className="Definitions">
          {props.results.meanings.map(function (meaning, index) {
            return (
              <section key={index}>
                <Meaning meaning={meaning} />
                <br />

                <Synonyms synonyms={meaning.synonyms} />
              </section>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
