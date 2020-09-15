import React from "react";
import Trainers from "./components/Trainers";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Trainers} />
        <Route path="/trainers" component={Trainers} />
      </Switch>
    </div>
  );
}

export default App;
