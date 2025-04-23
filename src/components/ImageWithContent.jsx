import styles from "@/styles/ImageWithContent.module.css";

export default function ImageWithContent() {
  const data = [
    {
      title: "Highly collaborative approach",
      src: "/images/Habu-Feature-675-Opt.webp",
      logoWrap: "/images/Habu_logo-Opt.svg",
      alt: "Tablet Screen",
      video: false,
    },
    {
      title: "2 Highly collaborative approach",
      src: "/images/Clear-Digital-Home-Hero_400kbps.mp4",
      logoWrap: "/images/Habu_logo-Opt.svg",
      video: true,
    },
  ];

  return (
    <section className="ImageWithContent bg-black no-padding">
      <div className="content-wrap flex lg:block">
        {data.map((itemWrap, index) => (
          <div
            className={`${styles.itemWrap} itemWrap w-[50%] lg:w-full relative key={index}`}
            key={index}
          >
            <div className="imgWrap overflow-hidden h-full">
              {itemWrap.video ? (
                <video autoPlay loop muted playsInline>
                  <source src={itemWrap.src} type="video/mp4" />
                </video>
              ) : (
                <img
                  className="h-[100%] w-[100%] object-contain"
                  src={itemWrap.src}
                  alt={itemWrap.alt}
                  loading="lazy"
                />
              )}
            </div>
            <div className="contentWrap z-[11] absolute bottom-[70px] pr-[80px] pl-[80px] lg:pr-[40px] lg:pl-[40px] left-0">
              <div className="logoWrap max-w-[120px] max-h-[120px] overflow-hidden mb-[20px]">
                <img
                  className="h-[100%] w-[100%] object-contain"
                  src={itemWrap.logoWrap}
                  alt="icon"
                  loading="lazy"
                />
              </div>
              <div className="innerContent">
                <h3 className="text-white">{itemWrap.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
