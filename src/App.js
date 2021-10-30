import logo from "./logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" width="" />
        </header>
        <main>
          <Dictionary defaultKeyword="graphic design" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by Yasmine Senter and is{" "}
            <a href="https://github.com/yasminemediamacs/dictionary-app">
              open-sourced on Github
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
