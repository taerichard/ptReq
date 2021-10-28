import React from "react";
import Trainers from "./components/Trainers/index";
import Header from "./components/Header";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./components/ui/Theme";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";

 function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route 
            exact path="/" 
            component={Home} />

            <Route
              exact
              path="/trainer"
              component={Trainers}
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

export default App; 