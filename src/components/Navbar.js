import React, { Component } from "react";
import { Navbar } from 'react-bootstrap';
import star from "./star.svg";

export default class Barranav extends Component {

    constructor(props){
      super(props);
    }
    render() {
      return(
          <div>
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="#home">
                <img
                  alt=""
                  src={star}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '}
                Multiroute App
              </Navbar.Brand>
            </Navbar>
          </div>
      );
    }
  }