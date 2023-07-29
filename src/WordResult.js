import React from "react";

export default function WordResult(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <h1>{props.results.word}</h1>

        {props.results.meanings.map(function (definition, index) {
          return (
            <div key={index}>
              <h3>{definition.partOfSpeech}</h3>
              <p> {definition.definitions[0].definition}</p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
