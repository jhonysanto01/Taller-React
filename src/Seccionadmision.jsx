import React from 'react'
import ninos from "./images/kidss.jpg";
import mapa from './js/mapa.js';

export default function Seccionadmision() {
  return (
    <section className="admission_section ">
        <mapa/>
        <div className="container-fluid position-relative">
            <div className="row h-100">
                <div id="map" className="h-100 w-100 ">
                </div>
                <div className="container">
                    <div className="admission_container position-absolute">
                        <div className="admission_img-box">
                            <img src={ninos} alt=""/>
                        </div>
                        <div className="admission_detail">
                            <h3>
                                Apply for Admission
                            </h3>
                            <p className="mt-3 mb-4">
                                There are many variations of passages of Lorem Ipsum available, but the majority h
                            </p>
                            <div className="">
                                <a href="" className="admission_btn btn_on-hover">
                                Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
