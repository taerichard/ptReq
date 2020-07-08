import React from "react";
import Trainers from "./components/Trainers";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/" component={Trainers} />
          <Route path="/trainers" component={Trainers} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
