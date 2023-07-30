import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          return (
            <div key={index}>
              <em>synonyms: </em> {synonym}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
