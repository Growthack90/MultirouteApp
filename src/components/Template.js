import React, { Component } from "react";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

export default class Template extends Component {

    constructor(props){
      super(props);
    }
    render() {
      return(
          <div>
              <Header />
              {this.props.children}
              <Footer />
          </div>
      );
    }
  }