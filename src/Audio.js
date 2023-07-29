import React from "react";

export default function Audio(props) {
  return (
    <div>
      <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
      <div>{props.phonetics.text}</div>;
    </div>
  );
}
