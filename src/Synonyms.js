import React from "react";

export default function Synonyms(props) {
  if (props.synonyms.synonyms) {
    return (
      <ul>
        {props.synonyms.synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
