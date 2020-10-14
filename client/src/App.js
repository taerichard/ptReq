import React from "react";
import Trainers from "./components/Trainers";
import Header from "./components/Header";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./components/ui/Theme";
import TrainerList from "./components/Trainers/TrainerList";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Locations from "./components/Locations/index";

export default function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/trainer" component={Trainers} />
            <Route exact path="/location" component={Locations} />
            <Route
              exact
              path="/contact"
              component={() => <div>Contact Us Component</div>}
            />
            <Route
              exact
              path="/register"
              component={() => <div>Sign Up Component</div>}
            />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}
