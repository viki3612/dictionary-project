import logo from "./logo192.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <h1 className="Dictionary-Title"> Dictionary</h1>
          <Dictionary defaultWord="sunset" />
        </main>
        <footer className="App-footer m-4">
          Project is coded by Viktoria Nikolova & is open sourced on{" "}
          <a href="https://github.com/viki3612/dictionary-project"> Github </a>
        </footer>
      </div>
    </div>
  );
}
