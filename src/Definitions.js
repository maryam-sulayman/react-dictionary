import React from "react";
import Synonyms from "./Synonyms";

export default function Definitions(props) {
  if (props.definition.example) {
    return (
      <div className="Definitions">
        <div>
          {" "}
          <strong>Definition: </strong>
          {props.definition.definition}
        </div>
        <div>
          <strong>e.g.</strong> <em>{props.definition.example}</em>
        </div>
        <Synonyms synonyms={props.definition.synonyms} />
      </div>
    );
  } else {
    return (
      <div>
        {" "}
        <strong>Definition: </strong>
        {props.definition.definition}
      </div>
    );
  }
}
