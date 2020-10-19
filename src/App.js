import React from "react";
import "./App.css";
import SearchParams from "./SearchParams";
import "./style.css";
import { Link, Router } from "@reach/router";
import Details from "./Details";

function App() {
  return (
    <div>
      <header>
        <Link to="/">Adopt Me! </Link>
      </header>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
}

export default App;
