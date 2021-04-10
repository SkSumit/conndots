import Slider from "react-slick";
import React from "react";

export const SliderSection = ({ media }) => {
  const imgBaseURL = "https://ullu.app/ulluCore/api/v1/files/download/";
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="px-3">
      <Slider {...settings}>
        {media.map((item) => {
          return (
            <img
              key={item.id}
              className="imgSize"
              src={imgBaseURL + item.landscapePosterId}
              alt="Picture of the author"
            />
          );
        })}
      </Slider>
    </div>
  );
};
