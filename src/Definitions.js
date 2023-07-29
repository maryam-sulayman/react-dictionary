import React from "react";

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
              <br />
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
