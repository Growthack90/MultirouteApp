import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Template from "./components/Template.js";
import Home from "./components/Home.js";
import ChiSono from "./components/ChiSono.js";
class App extends Component {

  constructor(props){
    super(props);
  }
  render() {
    return(
      <BrowserRouter>
        <Template>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/chi-sono" component={ChiSono}/>
          </Switch>
        </Template>
      </BrowserRouter>
    );
  }
}

export default App;
