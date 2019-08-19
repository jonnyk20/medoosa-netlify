import React, { useState } from "react"
import Slider from "react-slick"
import "./Carousel.scss"

const settings = {
  centerMode: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  className: "carousel",
  swipeToSlide: true,
  focusOnSelect: true,
  arrows: false,
  centerPadding: "60px",
}

const Carousel = ({ items, afterChange }) => (
  <div>
    <div className="carousel-container">
      <Slider {...settings} afterChange={afterChange}>
        {items}
      </Slider>
    </div>
  </div>
)

export default Carousel
