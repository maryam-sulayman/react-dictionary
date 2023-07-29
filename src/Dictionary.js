import React, { useState } from "react";
import WordResult from "./WordResult";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function search() {
    let apiKey = "d46f1b703c43197t9d1457e4fbea3dco";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeywordValue(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoading(true);
    search();
  }

  if (loading) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              className="form-control"
              onChange={handleKeywordValue}
            />
          </form>
        </section>
        <WordResult results={results} />
      </div>
    );
  } else {
    return load();
  }
}
