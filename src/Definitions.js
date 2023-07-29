import React from "react";

export default function Definitions(props) {
  return (
    <div className="Definitions">
      {props.definition.definitions.map(function (definition, index) {
        if (definition.example) {
          return (
            <div key={index}>
              <div>{definition.definition}</div>
              <div>
                <strong>e.g.</strong> {definition.example}
              </div>
              <br />
            </div>
          );
        } else {
          return definition.definition;
        }
      })}
    </div>
  );
}
