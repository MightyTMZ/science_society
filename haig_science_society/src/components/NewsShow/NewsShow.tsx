"use client";

import React, { useState, useEffect } from "react";
import styles from "./NewsShow.module.css";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { News } from "@/types/News";
import NewsModal from "../NewsModal/NewsModal";


interface NewsShowProps {
  title?: string;
  slides: News[];
}

const NewsShow = ({ title, slides }: NewsShowProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedSlide, setSelectedSlide] = useState<News | null>(null);
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

  const openModal = (slide: News) => {
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

  const [isMobile, setIsMobile] = useState(false); // No window usage here

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 768);
      const handleResize = () => setIsMobile(window.innerWidth <= 768);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
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


  return (
    <div className={`${styles.NewsShowContainer} mb-6`}>
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
        <NewsModal
          isOpen={!!selectedSlide}
          onClose={closeModal}
          {...selectedSlide}
          news={selectedSlide}
        />
      )}
    </div>
  );
};

export default NewsShow;
