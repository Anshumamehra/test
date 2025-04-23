// components/ImageSlider.jsx
"use client";
import { useState, useEffect } from "react";
import styles from "@/styles/ImageSlider.module.css";

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      title: "Results-driven websites and digital brand experiences.",
      description:
        "Build and accelerate your website, brand, and digital marketing success with our award-winning digital agency, rooted in Silicon Valley innovation. We provide expert strategic and data-informed solutions that drive real-world results.",
    },
    {
      title: "Confidently navigating change",
      description:
        "Myrious Group is an independent holding company enabling forward-thinking brands to achieve breakthrough performance through power of orchestration.",
    },
    {
      title: "20+ years of success",
      description:
        "Build and accelerate your website, brand, and digital marketing success with our award-winning digital agency, rooted in Silicon Valley innovation. We provide expert strategic and data-informed solutions that drive real-world results.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const isFirstSlide = currentIndex === 0;
  const isLastSlide = currentIndex === slides.length - 1;

  return (
    <section className="ImageSlider bg-black">
      <div className="container">
        <divs
          className={`sliderWrap relative w-full overflow-hidden flex text-center flex-wrap items-center justify-center max-w-[800px] m-auto ${styles.sliderWrap}`}
        >
          {/* Show only current slide */}
          <div
            className={`slidesWrapper flex w-full h-full ${styles.slidesWrapper}`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`item w-full flex justify-center items-center min-w-full ${styles.item}`}
              >
                <div className="innerContent px-[40px]">
                  <h3 className="text-white capitalize">{slide.title}</h3>
                  <p className="text-white pt-[20px]">{slide.description}</p>
                </div>
              </div>
            ))}
          </div>
        </divs>

        {/* Navigation Arrows */}
        <button
          className={`navArrow prevArrow ${isFirstSlide ? "disabled" : ""} ${
            styles.navArrow
          } ${styles.prevArrow}`}
          onClick={prevSlide}
          disabled={isFirstSlide}
          aria-label="Previous slide"
        >
          ❮
        </button>
        <button
          className={`navArrow nextArrow ${isLastSlide ? "disabled" : ""} ${
            styles.navArrow
          } ${styles.nextArrow}`}
          onClick={nextSlide}
          disabled={isLastSlide}
          aria-label="Next slide"
        >
          ❯
        </button>

        {/* Slick Dots */}
        <div className={styles.dotsContainer}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                currentIndex === index ? styles.activeDot : ""
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
