"use client";

import React, { useState, useEffect } from "react";
import styles from "./Slideshow.module.css";
import { StaticImageData } from "next/image";
import Image from "next/image";

interface Slide {
  image: StaticImageData;
  title: string;
  description: string;
}

interface SlideshowProps {
  title?: string;
  slides: Slide[];
}

const Slideshow = ({ title, slides }: SlideshowProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(timer); // Cleanup interval on unmount
  }, [currentSlide]);

  // Create visible slides
  const visibleSlides = slides
    .slice(currentSlide, currentSlide + 3)
    .concat(slides.slice(0, Math.max(0, currentSlide + 3 - slides.length)));

  return (
    <div className={styles.slideshowContainer}>
      {title ? (
        <h1
          className={styles.slideTitle}
          style={{
            fontSize: "2rem",
          }}
        >
          {title}
        </h1>
      ) : (
        <></>
      )}
      <div className={styles.slidesWrapper}>
        {visibleSlides.map((slide, index) => (
          <div key={index} className={styles.slide}>
            <Image
              src={slide.image.src}
              alt={slide.title}
              className={styles.slideImage}
              width={300}
              height={300}
            />
            <div className={styles.slideContent}>
              <h2 className={styles.slideTitle}>{slide.title}</h2>
              <p className={styles.slideDescription}>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button className={styles.prev} onClick={prevSlide}>
        &#10094;
      </button>
      <button className={styles.next} onClick={nextSlide}>
        &#10095;
      </button>

      <div style={{ textAlign: "center" }}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === currentSlide ? styles.active : ""
            }`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
