import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  function handleSubmit(event) {
    event.preventDefault();
    alert(`Hello ${keyword}`);
  }

  function handleKeywordValue(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          className="form-control w-50"
          autoFocus="on"
          onChange={handleKeywordValue}
        />
      </form>
    </div>
  );
}
