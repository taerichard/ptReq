import React from "react";
import Header from "./Components/Header";
import SearchLink from "./Components/SearchBar";
import axios from "axios";


function App() {
  return (
    <div className="App">
      <Header />
      <SearchLink  />
    </div>
  );
}

export default App;
