import React from "react";

export default function Audio(props) {
  if (props.phonetics) {
    return <div>/{props.phonetics}/</div>;
  } else {
    return null;
  }
}
