import React from "react";
import "./Antonyms.css";
export default function Antonyms(props) {
  if (props.antonyms.length > 0) {
    return (
      <div className="Antonyms">
        <em className="Antonyms-title">Antonyms</em>
        <br />
        {props.antonyms.map(function (antonyms, index) {
          return (
            <div className="Antonyms-words" key={index}>
              {" "}
              {antonyms}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
