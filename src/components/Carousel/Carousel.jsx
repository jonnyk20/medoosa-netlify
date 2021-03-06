import React, { useState } from "react"
import Slider from "react-slick"
import "./Carousel.scss"

const settings = {
  centerMode: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  className: "carousel",
  swipeToSlide: true,
  focusOnSelect: true,
  arrows: false,
  centerPadding: "60px",
}

const Carousel = ({ items, afterChange, initialSlide = 0 }) => (
  <div>
    <div className="carousel-container">
      <Slider
        {...settings}
        initialSlide={initialSlide}
        afterChange={afterChange}
      >
        {items.map((Item, i) => (
          <div key={`${i}-${i}`}>
            <div className="carousel__item">
              <Item />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
)

export default Carousel
