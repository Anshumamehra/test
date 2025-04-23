// components/TabsSection.jsx
"use client";
import { useState } from "react";
import styles from "@/styles/TabsSection.module.css";

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const tabs = [
    {
      title: "Ajay",
      heading: "Ajay",
      blurb: "Web Developer",
      imgSrc: "/images/sift.jpg",
      alt: "Sift",
    },
    {
      title: "Anshu",
      heading: "Anshuma",
      blurb: "Web Developer",
      imgSrc: "/images/sailpoint-feature.png",
      alt: "SailPoint: Enterprise identity security made simple and smart",
    },
    {
      title: "Sandeep",
      heading: "Sandeep",
      blurb: "Next Js Developer",
      imgSrc: "/images/nile-banner.png",
      alt: "Nile",
    },
    {
      title: "Lalit",
      heading: "Lalit",
      blurb: "Web Developer",
      imgSrc: "/images/china.png",
      alt: "China",
    },
    {
      title: "Munesh",
      heading: "Munesh",
      blurb: "Team Leader",
      imgSrc: "/images/nile-banner.png",
      alt: "Nile",
    },
    {
      title: "Nikita",
      heading: "NIKITA",
      blurb: "Team Leader",
      imgSrc: "/images/nile-banner.png",
      alt: "Nile",
    },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const currentTab = tabs[activeTab];

  return (
    <section
      className={`tabsSection bg-black overflow-visible ${styles.tabsSection}`}
    >
      <div className="container">
        {/* Desktop Tabs */}
        <div className={`tabHeader ${styles.tabHeader}`}>
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`${styles.tabButton} ${
                activeTab === index ? styles.active : ""
              }`}
              onClick={() => handleTabClick(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Mobile Dropdown */}
        <div className={styles.mobileDropdown}>
          <button className={styles.dropdownToggle} onClick={toggleDropdown}>
            {tabs[activeTab].title}
            <span className={styles.arrow}></span>
          </button>

          {isDropdownOpen && (
            <div className={styles.dropdownMenu}>
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`${styles.dropdownItem} ${
                    activeTab === index ? styles.active : ""
                  }`}
                  onClick={() => handleTabClick(index)}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Tab Content */}
        <div className={`tabContent ${styles.tabContent}`}>
          <div className="inner-wrap">
            <h3 className="text-white">{currentTab.heading}</h3>
            <p className="text-white pt-[15px]">{currentTab.blurb}</p>
            <div className="bg-wrap h-full w-full overflow-hidden pt-[50px] lg:pt-[20px]">
              <img
                className="h-[100%] w-[100%] relative object-cover"
                src={currentTab.imgSrc}
                alt={currentTab.alt}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabsSection;
