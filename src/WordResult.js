import React from "react";

export default function WordResult(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <h1>{props.results.word}</h1>
        <h3>{props.results.partOfSpeech}</h3>

        {props.results.meanings.map(function (definition, index) {
          console.log(definition);
          return (
            <div key={index}>
              <p> {definition.definitions[0].definition}</p>
              <p> {definition.synonyms[0]}</p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
