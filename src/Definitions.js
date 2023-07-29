import React from "react";
import Synonyms from "./Synonyms";

export default function Definitions(props) {
  return (
    <div className="Definitions">
      {props.definition.definitions.map(function (definition, index) {
        if (definition.example) {
          return (
            <div key={index}>
              <div>
                <strong>Definition: </strong>
                {definition.definition}
              </div>
              <div>
                <strong>e.g.</strong> <em>{definition.example}</em>
              </div>
              <Synonyms synonyms={props.definition} />
            </div>
          );
        } else {
          return (
            <div>
              {" "}
              <strong>Definition: </strong>
              {definition.definition}
            </div>
          );
        }
      })}
    </div>
  );
}
