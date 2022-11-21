import React from 'react';

import profesor1 from "./images/teacher-1.jpg";
import profesor2 from "./images/teacher-2.jpg";
import profesor3 from "./images/teacher-3.jpg";
import profesor4 from "./images/teacher-4.jpg";
import rightarrow from "./images/right-arrow.png";


export default function Seccionprofesores() {
  return (
    <section class="teacher_section layout_padding-bottom">
        <div class="container">
            <h2 class="main-heading ">
                Our Teachers
            </h2>
            <p class="text-center">
                Ipsum available, but the majority h
            </p>
            <div class="teacher_container layout_padding2">
                <div class="card-deck">
                    <div class="card">
                        <img class="card-img-top" src={profesor1} alt="Card image cap"/>
                        <div class="card-body">
                        <h5 class="card-title">Den Mark</h5>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src={profesor2} alt="Card image cap"/>
                        <div class="card-body">
                        <h5 class="card-title">Leena jorj</h5>
                        </div>

                    </div>
                    <div class="card">
                        <img class="card-img-top" src={profesor3} alt="Card image cap"/>
                        <div class="card-body">
                        <h5 class="card-title">Magi Den</h5>

                        </div>

                    </div>

                    <div class="card">
                        <img class="card-img-top" src={profesor4} alt="Card image cap"/>
                        <div class="card-body">
                        <h5 class="card-title">jonson mark</h5>

                        </div>

                    </div>
                </div>
            </div>


            <div class="d-flex justify-content-center mt-3">
                <a href="" class="call_to-btn  ">
                    <span>
                        See More
                    </span>
                    <img src={rightarrow} alt=""/>
                </a>
            </div>
        </div>
    </section>
  )
}
