import React, { Component } from "react";
import Fade from "react-reveal";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Estos son algunos de nuestros trabajos.</h1>

              <h1> <strong>Manicure</strong></h1>
                <Carousel>
                  
                     {this.props.data.manicure.map(test => {
                       return (
                        <div><img width={'50%'} height={'10hv'} alt={test.image} id={`img-${test.alt}`} src={"images/portfolio/manicure/" + test.image}/> </div>) 
                     })}
                 
                </Carousel>
                <h1> <strong>Pedicure</strong></h1>
                <Carousel>
                  
                     {this.props.data.manicure.map(test => {
                       return (
                        <div><img width={'50%'} height={'10hv'} alt={test.image} id={`img-${test.alt}`} src={"images/portfolio/pedicure/" + test.image}/> </div>) 
                     })}
                 
                </Carousel>

                
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
