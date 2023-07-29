import React from "react";
import Definitions from "./Definitions";
import Audio from "./Audio";

export default function WordResult(props) {
  console.log(props);
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h1 className="text-capitalize">{props.results.word}</h1>
          <Audio phonetics={props.results.phonetic} />
        </section>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <h3 className="mt-3 ">{meaning.partOfSpeech}</h3>
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
