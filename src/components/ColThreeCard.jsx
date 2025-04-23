import styles from "@/styles/ColThreeCards.module.css";

export default function ColThreeCard() {
  const data = [
    {
      title: "Highly collaborative approach",
      blurb:
        "We build lasting relationships that deliver valuable outcomes over the long term.",
      imgSrc: "/images/cursor.svg",
      alt: "Cursor Icon",
    },
    {
      title: "2 Highly collaborative approach",
      blurb:
        "We build lasting relationships that deliver valuable outcomes over the long term.",
      imgSrc: "/images/cursor.svg",
      alt: "Cursor Icon",
    },
    {
      title: "3 Highly collaborative approach",
      blurb:
        "We build lasting relationships that deliver valuable outcomes over the long term.",
      imgSrc: "/images/cursor.svg",
      alt: "Cursor Icon",
    },
    {
      title: "4 Highly collaborative approach",
      blurb:
        "We build lasting relationships that deliver valuable outcomes over the long term.",
      imgSrc: "/images/cursor.svg",
      alt: "Cursor Icon",
    },
    {
      title: "5 Highly collaborative approach",
      blurb:
        "We build lasting relationships that deliver valuable outcomes over the long term.",
      imgSrc: "/images/cursor.svg",
      alt: "Cursor Icon",
    },
  ];
  return (
    <section
      className={`${styles.blackgrid}
       relative ColThreeCard `}
    >
      <div className="container">
        <div className="introBlock relative z-[9] mb-[60px]">
          <h5 className="mb-[20px]">20+ years of success</h5>
          <h3>
            Results-driven websites and <span>digital</span> brand experiences.
          </h3>
          <p className="mt-[20px]">
            Build and accelerate your website, brand, and digital marketing
            success with our award-winning digital agency, rooted in Silicon
            Valley innovation. We provide expert strategic and data-informed
            solutions that drive real-world results.
          </p>
        </div>
        <div className="outerWrap flex-wrap relative z-[9] flex w-[calc(100%+20px)] ml-[-10px] lg:block lg:w-full lg:mx-0">
          {data.map((item, index) => (
            <div
              className="item mb-[20px] p-[20px] w-[calc(50%-20px)] mx-[10px] lg:mb-[10px] lg:last:mb-0 lg:w-full lg:mx-0"
              key={index}
            >
              <div className="logoWrap max-w-[100px] max-h-[100px] lg:max-w-[70px] lg:max-h-[70px]  overflow-hidden mb-[20px]">
                <img
                  className="h-[100%] w-[100%] object-contain"
                  src={item.imgSrc}
                  alt={item.alt}
                  loading="lazy"
                />
              </div>
              <div className="innerContent relative z-[9]">
                <h4>{item.title}</h4>
                <p className="mt-[20px] lg:mt-[15px] ">{item.blurb}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
