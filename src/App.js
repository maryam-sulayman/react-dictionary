import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary defaultKeyword="happy" />
      </div>
      <footer className="text-center mb-4">
        <a
          href="https://github.com/maryam-sulayman/react-dictionary"
          target="_black"
          rel="noreferrer"
        >
          Open source{" "}
        </a>
        code by{" "}
        <a
          href="https://www.linkedin.com/in/maryam-sulayman-4484601b3/"
          target="_black"
          rel="noreferrer"
        >
          Maryam Sulayman
        </a>
        , hosted on{" "}
        <a
          href="https://teal-moonbeam-a45a06.netlify.app/"
          target="_black"
          rel="noreferrer"
        >
          Netlify.
        </a>
        <div>
          <a href="https://www.freepik.com/free-vector/purple-fluid-background-frame_14547781.htm#query=purple&position=29&from_view=search&track=sph">
            Image by rawpixel.com
          </a>{" "}
          on Freepik
        </div>
      </footer>
    </div>
  );
}
