import { useState, useEffect } from "react";
import styles from "@/styles/ContentWithImageSlider.module.css";


export default function ContentWithImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      title: "Results-driven websites and digital brand experiences.",
      desc:"Searching through video content will never be the same. This feature, coming soon to Digital Media Hub, enables searching for aspects in videos that have not been explicitly labeled. Whether it is audio, text, or specific elements within a video, this technology understands how to find exactly what you need.",
        imgSrc: "/images/studio-mixing.png",
    },
    {
        title: "Voice Anonymization ",
        desc:"A tool that allows audio dialogue to be replaced in a video with a neutral voice. Use cases for this technology include redacted bodycam videos and witness protection cases.",
          imgSrc: "/images/studio-mixing.png",

        },
      {
        title: "3Results-driven websites and digital brand experiences.",
        desc:
          "Build and accelerate your website, brand, and digital marketing success with our award-winning digital agency, rooted in Silicon Valley innovation. We provide expert strategic and data-informed solutions that drive real-world results.",
          imgSrc: "/images/hire-2.png",

        },
      {
        title: "4Results-driven websites and digital brand experiences.",
        desc:
          "Build and accelerate your website, brand, and digital marketing success with our award-winning digital agency, rooted in Silicon Valley innovation. We provide expert strategic and data-informed solutions that drive real-world results.",
          imgSrc: "/images/hire-2.png",

        },
]

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
    <section className="ContentWithImageSlider bg-white">
      <div className="container relative">
        <divs
          className={`sliderWrap relative w-full overflow-hidden flex  flex-wrap items-center justify-center m-auto ${styles.sliderWrap}`}
        >
          {/* Show only current slide */}
          <div
            className={`slidesWrapper flex w-full h-full ${styles.slidesWrapper}`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`item w-full flex min-w-full ${styles.item}`}
              >
                <div className="innerContent px-[40px] flex justify-center items-center">
                  <div className=" w-[calc(100%-622px)]">
                    <div className="bg-[#fa524d] w-[calc(100%+191px)] pt-[140px] pb-[140px] pl-[129px] pr-[250px]">
                      <h3 className="text-white capitalize">{slide.title}</h3>
                      <p className="text-white pt-[20px]">{slide.desc}</p>
                      <div class="btnWrap mt-[20px]">
                          <a href="#" class="pink-btn link-white text-white">View all case studies</a>
                      </div>
                    </div>
                  </div>
                  <div className="imgWrap w-full max-h-[345px] max-w-[600px] overflow-hidden">
                            <img
                                className="object-cover h-full w-full"
                                src={slide.imgSrc}
                                alt={slide.alt}
                                loading="lazy"
                                />
                            </div>
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
