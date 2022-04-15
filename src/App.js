import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>☂️Weather App☂️</h1>
        <Weather defaultCity="New York" />
        <footer>
          This website was coded by Randi Bradley and is{" "}
          <a
            href="https://github.com/robthenob/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://whimsical-bunny-e2d6c8.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
