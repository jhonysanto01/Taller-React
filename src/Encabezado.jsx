import React from "react";

/* las 3 imagenes que necesite */
import logo from "./images/logo.png";
import rightarrow from "./images/right-arrow.png";
import hero from "./images/hero.png";


export default function Encabezado() {
  return (
    <div className="top_container">
      <header className="header_section">
        <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbar-brand" href="index.js">
                  <img src={logo} alt=""/>
                  <span>
                    Adward
                  </span>
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                  <ul className="navbar-nav  ">
                    <li className="nav-item active">
                      <a className="nav-link" href="index.js"> Home <span className="sr-only">(current)</span></a>
                    </li>
                  </ul>
                  <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                    <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
                  </form>
              </div>
            </div>
        </nav>
        </div>
      </header>
      <section className="hero_section ">
        <div className="hero-container container">
            <div className="hero_detail-box">
              <h3>
                  Welcome to <br/>
                  Best educations
                </h3>
                <h1>
                  school
                </h1>
                <p>
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
                  some form, by injected humour, or randomised
                </p>
              <div className="hero_btn-continer">
                <a href="" className="call_to-btn btn_white-border">
                  <span>
                    Contact
                  </span>
                  <img src={rightarrow} alt=""/>
                </a>
              </div>
          </div>
          <div className="hero_img-container">
            <div>
              <img src={hero} alt="" className="img-fluid"/>
            </div>
          </div>
        </div>
      </section>
    </div>
      
  )
}


