import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;


    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>Nosotros</h2>

              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contacto</h2>
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>
                      <a href={"https://www.google.com/maps/place/Prol.+Ju%C3%A1rez+num+144+Col.+Brunet+Nanchital+Veracruz,+96360/@18.0707415,-94.4109052,3a,90y,89.4h,91.85t/data=!3m6!1e1!3m4!1s55fUIxoCFbMQChbroksBcQ!2e0!7i13312!8i6656!4m2!3m1!1s0x85e981e9b47b4741:0xf5ffe8e8d66f913a"}>
                      <i className="fa fa-map-marker"></i> {street}
                      <br />
                       {city} {state}, {zip}
                      </a>
                    </span>
                    <br />
                    <span> <a href={"tel:+529213212561"} target={'_blank'} rel="noreferrer">
                        <i className="fa fa-phone"></i> {phone}
                      </a></span>
                    <br />
                    <span><a href={`mailto:${email}`} target={'_blank'} rel="noreferrer">
                        <i className="fa fa-envelope-o"></i> {email}
                      </a>
                      </span>
                      <br />
                      <span><a href={"https://wa.link/oepla1"} target={'_blank'} rel="noreferrer">
                        <i className="fa fa-phone-square"></i> WhatsApp
                      </a>
                      </span>
                      <br />
                      <span><a href={"https://www.facebook.com/marluisa.oc"} target={'_blank'} rel="noreferrer">
                        <i className="fa fa-facebook"></i> Luisa Nails
                      </a>
                      </span>
                  </p>
                </div>
               
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
