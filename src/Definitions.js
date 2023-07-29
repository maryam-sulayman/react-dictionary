import React from "react";

export default function Definitions(props) {
  return (
    <div className="Definitions">
      {props.definitions.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div>
              {definition.definition}
              <br />
              {definition.example}
            </div>
          </div>
        );
      })}
    </div>
  );
}
