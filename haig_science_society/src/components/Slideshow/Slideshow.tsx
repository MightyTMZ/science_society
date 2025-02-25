"use client";

import React, { useState, useEffect } from "react";
import styles from "./Slideshow.module.css";
import { StaticImageData } from "next/image";
import Image from "next/image";
import EventModal from "../EventModal/EventModal";
import { FaExternalLinkAlt } from "react-icons/fa";

interface Slide {
  image: StaticImageData;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  description: string;
  status: string;
}

interface SlideshowProps {
  title?: string;
  slides: Slide[];
}

const Slideshow = ({ title, slides }: SlideshowProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedSlide, setSelectedSlide] = useState<Slide | null>(null);
  const [paused, setPaused] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const openModal = (slide: Slide) => {
    setSelectedSlide(slide);
  };

  const closeModal = () => {
    setSelectedSlide(null);
  };

  useEffect(() => {
    if (!paused) {
      const timer = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
      return () => clearInterval(timer);
    }
    // Cleanup interval on unmount
  }, [currentSlide]);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Create visible slides
  const visibleSlides = slides
    .slice(currentSlide, currentSlide + (isMobile ? 1 : 3))
    .concat(
      slides.slice(
        0,
        Math.max(0, currentSlide + (isMobile ? 1 : 3) - slides.length)
      )
    );

  function formatDate(dateString: string) {
    const date = new Date(dateString); // Convert the string to a Date object

    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "Asia/Kolkata",
    };

    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      date
    );
    return formattedDate;
  }

  return (
    <div className={`${styles.slideshowContainer} mb-6`}>
      {title && <h1 className={styles.slideTitle}>{title}</h1>}

      <div
        className={styles.slidesWrapper}
        onMouseOver={() => setPaused(true)}
        onMouseOut={() => setPaused(false)}
      >
        {visibleSlides.map((slide, index) => (
          <div key={index} className={styles.slide}>
            <Image
              src={slide.image}
              alt={slide.title}
              className={styles.slideImage}
              width={300}
              height={300}
              onClick={() => openModal(slide)}
            />
            <div className={styles.slideContent}>
              <h2 className={styles.slideTitle}>{slide.title}</h2>
              <p className={styles.slideDescription}>
                {slide.description.slice(0, 50)}...
              </p>
              <br />
              <p className={styles.slideDescription}>
                {formatDate(slide.date)}
              </p>
              <button
                className={styles.detailsButton}
                onClick={() => openModal(slide)}
                style={{ marginTop: "2rem" }}
              >
                <span style={{ display: "inline-flex" }}>
                  {" "}
                  View Details &nbsp; <FaExternalLinkAlt />
                </span>
              </button>
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

      <div style={{ textAlign: "center", marginTop: "16px" }}>
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

      {selectedSlide && (
        <EventModal
          isOpen={!!selectedSlide}
          onClose={closeModal}
          {...selectedSlide}
        />
      )}
    </div>
  );
};

export default Slideshow;
