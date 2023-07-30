import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary defaultKeyword="happy" />
      </div>
      <footer className="text-center mb-4">
        <a href="https://github.com/maryam-sulayman/react-dictionary">
          Open source{" "}
        </a>
        code by{" "}
        <a href="https://www.linkedin.com/in/maryam-sulayman-4484601b3/">
          Maryam Sulayman
        </a>
        , hosted on{" "}
        <a href="https://teal-moonbeam-a45a06.netlify.app/">Netlify</a>
      </footer>
    </div>
  );
}
