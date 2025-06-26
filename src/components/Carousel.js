"use client";
import React from "react";
import Slider from "react-slick";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import Image from "next/image";
export default function Carousel() {
  const slides = [
    { id: 1, title: "Slide 1", bg: "/images/slide_image1.jpg" },
    { id: 2, title: "Slide 2", bg: "/images/slide_image2.jpg" },
    { id: 3, title: "Slide 3", bg: "/images/slide_image3.jpg" },
    { id: 4, title: "Slide 4", bg: "/images/slide_image4.jpg" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    appendDots: (dots) => (
      <div
        style={{
          position: "relative",
          bottom: "0px",
          color: "red",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul style={{ margin: 0, padding: 0, display: "flex" }}>{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "lightgrey",
          margin: "0 5px",
        }}
      />
    ),
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  //   const settings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: isMobile ? 1 : 1,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     autoplaySpeed: 3000,
  //   };
  return (
    <>
      <Box
        sx={{
          width: "100%",
          maxWidth: "auto",
          mx: "auto",
          mt: 4,
          boxShadow: 6,
        }}
      >
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id}>
              {slide.bg.startsWith("/") ? (
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: {
                      xs: 200,
                      sm: 300,
                      md: 400,
                      lg: 800,
                    },
                  }}
                >
                  <Image
                    src={slide.bg}
                    alt={slide.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 1000px) 100vw, 100vw"
                    priority
                  />
                </Box>
              ) : (
                <div
                  style={{
                    backgroundColor: slide.bg,
                    color: "#fff",
                    height: 600,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                  }}
                >
                  {slide.title}
                </div>
              )}
            </div>
          ))}
        </Slider>
      </Box>
    </>
  );
}
