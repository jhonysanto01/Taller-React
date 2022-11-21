import React from 'react';
/* las 3 imagenes que necesite */
import kids from "./images/kids.jpg";
import rightarrow from "./images/right-arrow.png";

export default function Descripcion() {
  return (
    <section class="about_section layout_padding">
        <div class="container">
            <h2 class="main-heading ">
                About School
            </h2>
            <p class="text-center">
                There are many variations of passages of Lorem Ipsum available, but the majority hThere are many variations of
                passages of Lorem Ipsum available, but the majority h
            </p>
            <div class="about_img-box ">
                <img src={kids} alt="" class="img-fluid w-100"/>
            </div>
            <div class="d-flex justify-content-center mt-5">
                <a href="" class="call_to-btn  ">

                <span>
                    Read More
                </span>
                <img src={rightarrow} alt=""/>
                </a>
            </div>
        </div>
    </section>
  )
}
