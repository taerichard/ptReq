import React from "react";
//import Header from "./components/shared/Header";
//import Search from "./components/shared/Search";
import Nav from "./components/shared/Nav";
import Trainers from "./components/pages/Trainers";
import About from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route path="/" exact component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/trainers" component={Trainers} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
