import React, { useState } from "react";
import WordResult from "./WordResult";
import Photos from "./Photos";
import Photos from "./Photos";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handlePexelsResponse(response) {
    console.log(response);
    setPhotos(response.data);
  }

  function search() {
    let apiKey = "d46f1b703c43197t9d1457e4fbea3dco";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    let shecodesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
    axios.get(shecodesApiUrl).then(handlePexelsResponse);
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
          <h3 className="mb-3 ">search for a word 🔎</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              className="form-control"
              onChange={handleKeywordValue}
            />
          </form>
        </section>
        <WordResult results={results} />
        <Photos pictures={photos} />
      </div>
    );
  } else {
    return load();
  }
}
