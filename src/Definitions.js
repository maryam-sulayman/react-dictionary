import React from "react";
import Synonyms from "./Synonyms";

export default function Definitions(props) {
  if (props.definition.example) {
    return (
      <div className="Definitions">
        <div> • {props.definition.definition}</div>
        <div>
          <em> e.g. {props.definition.example}</em>
        </div>
        <Synonyms synonyms={props.definition.synonyms} />
      </div>
    );
  } else {
    return <div> • {props.definition.definition}</div>;
  }
}
