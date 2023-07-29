import React from "react";
import Definitions from "./Definitions";

export default function WordResult(props) {
  console.log(props);
  if (props.results) {
    return (
      <div className="Results">
        <h1 className="text-capitalize">{props.results.word}</h1>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <h3>{meaning.partOfSpeech}</h3>
              <strong>Definition:</strong>
              <Definitions definition={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
