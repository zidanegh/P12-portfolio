import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";
import data from "../assets/code-projet.json";

import Slider from "react-slick";

export default function Caroussel() {
  const projects = data.bigprojects;
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="grosProjet">
      <h2>Présentation gros projet</h2>
      <div className="Carousel">
        <Slider {...settings}>
          <div>
            <img
              src="https://github.com/zidanegh/P12-portfolio/blob/ad21436a970ddbd93f89c0116c0011a1f3f15f24/src/assets/coding.jpg"
              alt=""
            />
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
}
