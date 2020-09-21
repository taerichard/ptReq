import React from "react";
import Trainers from "./components/Trainers";
import Header from "./components/Header";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./components/ui/Theme";
import TrainerList from "./components/Trainers/TrainerList";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={() => <div>Home</div>} />
            <Route
              exact
              path="/trainer"
              component={() => <div>Trainer Component</div>}
            />
            <Route
              exact
              path="/location"
              component={() => <div>Location Component</div>}
            />
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
