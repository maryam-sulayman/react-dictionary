import React from "react";
import Definitions from "./Definitions";
import Audio from "./Audio";

export default function WordResult(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <h1 className="text-capitalize">{props.results.word}</h1>
        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Audio phonetics={phonetic} />
            </div>
          );
        })}

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <h3 className="mt-3 ">{meaning.partOfSpeech}</h3>
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
