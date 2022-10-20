import logo from "./logo192.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo"></img>
        </header>
        <main>
          <h1 className="Dictionary-Title"> Dictionary</h1>
          <Dictionary />
        </main>
        <footer className="App-footer m-4">
          Project is coded by Viktoria & is open sourced on{" "}
          <a href="https://github.com/viki3612/dictionary-project"> Github </a>
        </footer>
      </div>
    </div>
  );
}
