import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import Library from "./components/Library";
import Album from "./components/Album";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="nav-bar">
          <header>
            <Link to="/">
              <img
                src="/assets/images/jeds-jams.png"
                alt="jed's jams logo"
                className="logo"
              />
            </Link>
          </header>
          <Link to="/" className="home-link">
            Home
          </Link>
          <Link to="/library" className="library-link">
            Library
          </Link>
        </nav>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
