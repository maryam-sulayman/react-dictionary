import React from "react";
import Synonyms from "./Synonyms";
import "./Definitions.css";

export default function Definitions(props) {
  if (props.definition.example) {
    return (
      <div className="Definitions">
        <div className="Definition-text"> {props.definition.definition}</div>
        <div>
          <em className="Definition-example">
            {" "}
            <strong>e.g.</strong> {props.definition.example}
          </em>
          <Synonyms synonyms={props.definition.synonyms} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="Definition-text"> {props.definition.definition}</div>
    );
  }
}
