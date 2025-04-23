import styles from "@/styles/Detail.module.css";
import Image from "next/image";
import { useState } from "react";

export default function Detail() {
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Unified data structure for all content
  const pageContent = {
    intro: {
      subtitle: "Data, Insight & Analysis",
      title: "Economy at a Glance - June 2024",
      description:
        "This issue of Glance examines city of Houston population growth, the health of the local housing market, highlights of the latest Kinder Houston Area Survey, and the near-term outlook for the U.S. economy.",
      published: "Published on 6/5/24",
    },
    takeaways: [
      {
        title: "June Takeaway #1",
        text: "Unlike many U.S. cities, Houston has added population in recent years.",
      },
      {
        title: "June Takeaway #2",
        text: "Metro Houston area leads the nation in new and existing home sales.",
      },
      {
        title: "June Takeaway #3",
        text: "Across every demographic and income level, more Houstonians are excited about the future than worried.",
      },
    ],
    innerContents: [
      {
        title: "CITY POPULATION UPDATE",
        text: "The City of Houston is growing again. After struggling to retain population after Hurricane Harvey and losing population during the COVID-19 pandemic, the city added more than 23,000 residents over the past two years.",
        imgSrc: "/images/map.png",
      },
      {
        text: "Houston is bucking the trend that plagues many of its peers. Of the nation’s 100 most populous cities, 43 lost population between ’21 and ’23. For some, the population losses were significant.",
        imgSrc: "/images/tablenew.png",
      },
      {
        text: "The cities enjoying the most robust growth have several characteristics in common. First, they’re in metro areas that quickly recovered their pandemic job losses. Employment in these regions is at an all-time high.",
        imgSrc: "/images/jully.png",
      },
      {
        text: "The nation’s fastest growing cities are also in metros where the cost of living is substantially lower than cities that are losing population. The data in the following chart comes from the Council for Community and Economic Research’s quarterly Cost of Living Index, which examines housing, utility, food, health care, and transportation costs in 264 metro areas. The index does not factor in local taxes.",
        imgSrc: "/images/costnew.png",
      },
      {
        text: "The nation’s fastest growing cities are also in metro areas where housing tends to be more affordable.",
        imgSrc: "/images/avg.png",
      },
      {
        text: "Cities with the largest gains also tend to have lower state tax burdens. Conversely, the cities with shrinking populations tend to have higher tax burdens.",
        imgSrc: "/images/state.png",
      },
      {
        text: [
          "Other factors come into play as well. For instance, except for Seattle, the nation’s fastest growing cities tend to be in the sunbelt. Where Houston Ranks",
          "The City of Houston’s population now exceeds 2.3 million, ranking it as the nation’s fourth most populous city. Five of the nation’s most populous cities are now in Texas. San Antonio is the nation’s seventh most populous and could overtake No. 6 Philadelphia by the end of the decade.",
          "To continue reading, download this report.",
          'Note: The geographic area referred to in this publication as “Houston,” "Houston Area” and “Metro Houston” is the ten-county Census designated metropolitan statistical area of Houston-Pasadena-The Woodlands-Sugar Land, TX. The ten counties are: Austin, Brazoria, Chambers, Fort Bend, Galveston, Harris, Liberty, Montgomery, San Jacinto, and Waller.',
        ],
      },
    ],
    rightContent: {
      social: {
        title: "Share this Event",
        icons: [
          {
            href: "/",
            svg: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="34"
                viewBox="0 0 33 34"
                fill="none"
              >
                <g clipPath="url(#clip0_4945_23895)">
                  <path
                    d="M33 17C33 7.8873 25.6127 0.5 16.5 0.5C7.3873 0.5 0 7.8873 0 17C0 25.2355 6.03378 32.0617 13.9219 33.2996V21.7695H9.73242V17H13.9219V13.3648C13.9219 9.22953 16.3853 6.94531 20.1542 6.94531C21.9589 6.94531 23.8477 7.26758 23.8477 7.26758V11.3281H21.7671C19.7175 11.3281 19.0781 12.6001 19.0781 13.9062V17H23.6543L22.9228 21.7695H19.0781V33.2996C26.9662 32.0617 33 25.2355 33 17Z"
                    fill="#003B5C"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4945_23895">
                    <rect
                      width="33"
                      height="33"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            ),
          },
          {
            href: "/",
            svg: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="34"
                viewBox="0 0 33 34"
                fill="none"
              >
                <path
                  d="M25.2006 3.11792H29.8391L19.7053 14.7002L31.627 30.4611H22.2924L14.9813 20.9022L6.61563 30.4611H1.9743L12.8134 18.0725L1.37695 3.11792H10.9485L17.5571 11.8551L25.2006 3.11792ZM23.5726 27.6847H26.1429L9.55187 5.74848H6.79371L23.5726 27.6847Z"
                  fill="#003B5C"
                />
              </svg>
            ),
          },
          {
            href: "/",
            svg: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="34"
                viewBox="0 0 33 34"
                fill="none"
              >
                <g clipPath="url(#clip0_4945_23897)">
                  <path
                    d="M30.5572 0.5H2.43633C1.08926 0.5 0 1.56348 0 2.87832V31.1152C0 32.4301 1.08926 33.5 2.43633 33.5H30.5572C31.9043 33.5 33 32.4301 33 31.1217V2.87832C33 1.56348 31.9043 0.5 30.5572 0.5ZM9.79043 28.6209H4.89199V12.8686H9.79043V28.6209ZM7.34121 10.7223C5.76856 10.7223 4.49883 9.45254 4.49883 7.88633C4.49883 6.32012 5.76856 5.05039 7.34121 5.05039C8.90742 5.05039 10.1771 6.32012 10.1771 7.88633C10.1771 9.44609 8.90742 10.7223 7.34121 10.7223ZM28.1209 28.6209H23.2289V20.9639C23.2289 19.1398 23.1967 16.7873 20.683 16.7873C18.1371 16.7873 17.7504 18.7789 17.7504 20.835V28.6209H12.8648V12.8686H17.557V15.0213H17.6215C18.2725 13.7838 19.8709 12.4754 22.2492 12.4754C27.2057 12.4754 28.1209 15.7367 28.1209 19.9777V28.6209Z"
                    fill="#003B5C"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4945_23897">
                    <rect
                      width="33"
                      height="33"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            ),
          },
          {
            href: "/",
            svg: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="39"
                height="32"
                viewBox="0 0 39 32"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.5 2H33.5C35.425 2 37 3.575 37 5.5V26.5C37 28.425 35.425 30 33.5 30H5.5C3.575 30 2 28.425 2 26.5V5.5C2 3.575 3.575 2 5.5 2Z"
                  stroke="#003B5C"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M37 5.5L19.5 17.75L2 5.5"
                  stroke="#003B5C"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ),
          },
        ],
      },
      cards: [
        {
          imgSrc: "/images/office.png",
          title: "Download Economy at a Glance June 2024",
          linkText: "Download",
          linkHref: "#",
          hasOverlay: true,
        },
        {
          imgSrc: "/images/office.png",
          title: "Get Economy at a Glance Delivered Monthly",
          text: "Join the Houston: Economy at a Glance mailing list to get each month's edition sent directly to your inbox",
          linkText: "Subscribe",
          linkHref: "#",
          hasOverlay: false,
          isWhite: true,
        },
      ],
    },
  };

  // Event handlers
  const handleExpandClick = (index) => {
    setCurrentSlide(index);
    setIsOverlayActive(true);
  };

  const handleClose = () => {
    setIsOverlayActive(false);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % pageContent.innerContents.length);
  };

  const handlePrev = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + pageContent.innerContents.length) %
        pageContent.innerContents.length
    );
  };

  return (
    <section className={`Detail ${styles.Detail}`}>
      {/* Overlay Slider */}
      <div
        className={`${styles.Overlay} ${isOverlayActive ? styles.active : ""}`}
      >
        <div className="MiddleInner relative table text-center h-full w-full">
          <div className="Vmiddle table-cell align-middle">
            <div className="VideoWrap relative max-w-[1280px] m-auto">
              <div className="videoContainer relative max-w-[1280px] m-auto pl-[20px] pr-[20px]">
                <div className="ActiveItem h-full w-full">
                  <div className="InnerActiveItem">
                    <div
                      className={`ActiveImgWrap ${styles.ActiveImgWrap} px-[50px] relative`}
                    >
                      {pageContent.innerContents[currentSlide].imgSrc && (
                        <Image
                          src={pageContent.innerContents[currentSlide].imgSrc}
                          alt="Slide"
                          width={500}
                          height={500}
                          style={{ width: "100%", height: "auto" }}
                        />
                      )}
                    </div>
                    {Array.isArray(
                      pageContent.innerContents[currentSlide].text
                    ) ? (
                      pageContent.innerContents[currentSlide].text.map(
                        (paragraph, idx) => (
                          <p key={idx} className="text-white pt-[15px]">
                            {paragraph}
                          </p>
                        )
                      )
                    ) : (
                      <p className="text-white pt-[15px]">
                        {pageContent.innerContents[currentSlide].text}
                      </p>
                    )}
                  </div>
                  <div
                    className="rightBtn absolute top-0 bottom-0 m-auto right-0 w-[50px] h-[50px] cursor-pointer"
                    onClick={handleNext}
                  >
                    <Image
                      src="/images/rightslidebtn.svg"
                      alt="Next"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div
                    className="leftBtn absolute top-0 bottom-0 m-auto left-0 w-[50px] h-[50px] cursor-pointer"
                    onClick={handlePrev}
                  >
                    <Image
                      src="/images/leftsliderbtn.svg"
                      alt="Previous"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div
                    className="closeBtn absolute top-0 right-0 w-[50px] h-[50px] cursor-pointer"
                    onClick={handleClose}
                  >
                    <Image
                      src="/images/closegreen-btn.svg"
                      alt="Close"
                      width={50}
                      height={50}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container">
        {/* Intro Section */}
        <div className={`introWrap ${styles.introWrap}`}>
          <span className="uppercase tracking-[5px]">
            {pageContent.intro.subtitle}
          </span>
          <h2 className="uppercase mt-[20px] tracking-[0.2px]">
            {pageContent.intro.title}
          </h2>
          <p className="mt-[20px] tracking-[0.3px] font-medium">
            {pageContent.intro.description}
          </p>
          <h6 className="mt-[20px] tracking-[0.2px] text-black">
            {pageContent.intro.published}
          </h6>
        </div>

        <div className="OuterWrap mt-[100px] flex lg:block lg:mt-[40px]">
          <div className="LeftContent pr-[100px] w-[75%] tabletlarge:pr-[30px] tabletlarge:w-[70%] lg:pr-[0] lg:w-[100%]">
            {/* Takeaways */}
            <div className={`CardWrap ${styles.CardWrap}`}>
              <div
                className={`TitleWrap rounded-tl-[30px] rounded-tr-[30px] p-[30px] ${styles.TitleWrap} bg-[#003B5C]`}
              >
                <h3>Key March Takeaways</h3>
                <p>
                  Here are the facts to know about the Houston region this month
                </p>
              </div>
              <div
                className={`CardContent rounded-bl-[30px] rounded-br-[30px] p-[30px] ${styles.CardContent} bg-white`}
              >
                {pageContent.takeaways.map((takeaway, index) => (
                  <div className={`CardItem ${styles.CardItem}`} key={index}>
                    <h4>{takeaway.title}</h4>
                    <p>{takeaway.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Inner Contents */}
            {pageContent.innerContents.map((content, index) => (
              <div className="InnerContent mt-[40px]" key={index}>
                <div className="InnerWrap">
                  {content.title && (
                    <h3 className="uppercase mb-[20px] tracking-[0.2px]">
                      {content.title}
                    </h3>
                  )}
                  {Array.isArray(content.text) ? (
                    content.text.map((paragraph, idx) => (
                      <p
                        key={idx}
                        className="mt-[20px] tracking-[0.3px] font-medium"
                      >
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p className="mt-[20px] tracking-[0.3px] font-medium">
                      {content.text}
                    </p>
                  )}
                  {content.imgSrc && (
                    <div
                      className={`ImgInner relative ${styles.ImgInner} my-[40px]`}
                    >
                      <Image
                        src={content.imgSrc}
                        alt="Content Image"
                        width={500}
                        height={500}
                        style={{ width: "100%", height: "100%" }}
                      />
                      <div
                        className={`overlayBtn ${styles.overlayBtn} absolute bottom-[30px] right-[30px] w-[42px] h-[42px] cursor-pointer`}
                        onClick={() => handleExpandClick(index)}
                      >
                        <Image
                          src="/images/greenbtn.svg"
                          alt="Expand"
                          width={42}
                          height={42}
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                    </div>
                  )}
                  {content.imgSrc && (
                    <div className="btnWrap">
                      <span
                        className="overlay font-bold underline cursor-pointer"
                        onClick={() => handleExpandClick(index)}
                      >
                        Click to Expand
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Content */}
          <div
            className={`RightContent ${styles.RightContent} w-[25%] tabletlarge:w-[30%] tablet:w-[50%] phablet:w-[50%] sm:w-[100%]`}
          >
            <div className="socialIcon w-full">
              <div className="socialWrpa">
                <h6 className="font-bold">
                  {pageContent.rightContent.social.title}
                </h6>
                <ul className="flex pt-[30px]">
                  {pageContent.rightContent.social.icons.map((icon, index) => (
                    <a
                      key={index}
                      className="iconWrap max-w-[33px] max-h-[33px] mr-[27px] overflow-hidden"
                      href={icon.href}
                      data-cursor-expand=""
                    >
                      {icon.svg}
                    </a>
                  ))}
                </ul>
              </div>
              {pageContent.rightContent.cards.map((card, index) => (
                <div
                  key={index}
                  className={`card my-[60px] relative ${styles.card} ${
                    card.isWhite ? styles.cardWhite : ""
                  }`}
                >
                  <div
                    className={`ImgWrap absolute top-0 w-full h-full overflow-hidden ${styles.ImgWrap}`}
                  >
                    <Image
                      src={card.imgSrc}
                      alt="Card Image"
                      width={500}
                      height={500}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <div className="CardContent p-[30px] relative z-[4]">
                    <h5 className={card.isWhite ? "text-black" : "text-white"}>
                      {card.title}
                    </h5>
                    {card.text && (
                      <p
                        className={
                          card.isWhite
                            ? "pt-[20px] text-black"
                            : "pt-[20px] text-white"
                        }
                      >
                        {card.text}
                      </p>
                    )}
                    <div className="btnWrap mt-[20px]">
                      <a
                        href={card.linkHref}
                        className={
                          card.isWhite
                            ? "link-white text-black"
                            : "link-white text-white"
                        }
                        data-cursor-expand=""
                      >
                        {card.linkText}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
