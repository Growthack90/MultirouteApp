import React, { Component } from "react";
import Navbar from "./Navbar.js";
import Carousel from "./Carousel.js";

export default class Header extends Component {

    constructor(props){
      super(props);
    }
    render() {
      return(
          <div>
              <Navbar />
              <Carousel />
          </div>
      );
    }
  }