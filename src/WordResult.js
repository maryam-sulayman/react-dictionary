import React from "react";
import Definitions from "./Definitions";
import Audio from "./Audio";
import "./WordResult";

export default function WordResult(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section className="text-center">
          <h1 className="text-capitalize">{props.results.word}</h1>
          <Audio phonetics={props.results.phonetic} />
        </section>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <h2 className="mt-3 ">{meaning.partOfSpeech}</h2>
              <Definitions definition={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
