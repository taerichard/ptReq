import React from "react";
//import Header from "./components/shared/Header";
//import Search from "./components/shared/Search";
import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer";
import Trainers from "./components/pages/Trainers/index";
import About from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/trainers" component={Trainers} />
          </Switch>
          <Footer />
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
