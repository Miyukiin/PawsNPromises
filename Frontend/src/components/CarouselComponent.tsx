"use client";

import React from "react";
import dynamic from "next/dynamic";
import "react-multi-carousel/lib/styles.css";


interface DynamicCarouselProps {
  items: string[];
}

const DynamicCarousel = dynamic(() => import("react-multi-carousel"), {
  ssr: false,
  loading: () => <p>Loading carousel...</p>, // Fallback while loading
});

const CarouselComponent: React.FC<DynamicCarouselProps> = ({ items }) => {
  if (!items || items.length === 0) {
    return <p>No items available for the carousel.</p>;
  }

  return (
    <div className="w-full mb-1 mt-6">
        <DynamicCarousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={1000}
          className=""
          centerMode={true}
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: Math.min(items.length, 3),
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: Math.min(items.length, 1),
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: Math.min(items.length, 2),
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
        >
          {items.map((image, index) => (
            <img
              key={index}
              src={image}
              className="object-cover w-full h-[400px] pointer-events-none"
              data-aos="fade-up"
            />
          ))}
        </DynamicCarousel>
      </div>
  );
};

export default CarouselComponent;
