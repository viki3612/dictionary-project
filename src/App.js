import "./App.css";
import Dictionary from "./Dictionary";
import logo from "./books-img.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <div className="App-header">
            <img src={logo} className="App-logo img-fluid" alt="logo" />
          </div>
          <Dictionary defaultWord="sunset" />
        </main>
        <footer className="App-footer m-4">
          Project is coded by{" "}
          <a
            href="https://viktoria-nikolova-portfolio.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Viktoria Nikolova
          </a>{" "}
          & is open sourced on{" "}
          <a
            href="https://github.com/viki3612/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Github{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
