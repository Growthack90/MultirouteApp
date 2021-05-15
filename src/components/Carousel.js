import React, { Component } from "react";
import { Carousel } from 'react-bootstrap';
import uno from "./1.jpg";
import due from "./2.jpg";
import tre from "./3.jpg";

export default class Carosello extends Component {

    constructor(props){
      super(props);
    }
    render() {
      return(
          <div>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={uno}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={due}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={tre}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
          </div>
      );
    }
  }