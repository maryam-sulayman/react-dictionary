import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="mt-5">Dictionary App</h1>
        <Dictionary defaultKeyword="sunset" />
      </div>
    </div>
  );
}
