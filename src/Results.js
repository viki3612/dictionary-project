import React from "react";
import Meaning from "./Meaning";
export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Result">
        {/*displaying what is within the api call within 'word'*/}
        <h2 className="result-output"> {props.results.word}</h2>
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
