import Slider from "react-slick";
import React from "react";

export const SliderRows = ({ media }) => {
  const imgBaseURL = "https://ullu.app/ulluCore/api/v1/files/download/";
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
          speed: 500,
          arrows: false,
        },
      },
    ],
  };
  
  return (
    <>
      <div className="px-3">
        <h1 className="title is-4 is-size-2-desktop"> Popular Movies | Series | Songs </h1>
        <Slider {...settings}>
          {media.popularMediaContent.map((item) => {
            return (
              <>
                <img
                  key={item.id}
                  className="imgRowSize px-3"
                  src={imgBaseURL + item.portraitPosterId}
                  alt="Picture of the author"
                />
                <h3 className="subtitle is-7 is-size-5-desktop has-text-centered mt-3">
                  {" "}
                  {item.title}{" "}
                </h3>
              </>
            );
          })}
        </Slider>
      </div>

      {media.mediaContentByCategory.map((category) => {
        return (
          <div className="px-3 my-6">
            <h1 className="title is-5 is-size-3-desktop ">{category.mediaContentTitle} </h1>
            <Slider {...settings}>
              {category.mediaContentList.map((item) => {
                return (
                  <>
                    <img
                      key={item.id}
                      className="imgRowSize px-3"
                      src={imgBaseURL + item.portraitPosterId}
                      alt="Picture of the author"
                    />
                    <h3 className="subtitle is-7 is-size-5-desktop has-text-centered mt-3">
                      {" "}
                      {item.title}{" "}
                    </h3>
                  </>
                );
              })}
            </Slider>
          </div>
        );
      })}
    </>
  );
};
