"use client";
import { useState } from "react";

import styles from "@/styles/Tab.module.css";

const Tab = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const tabdata =[
        {
            title: "Commercial",
            Heading: "Commercial",
            Data: "Your audio and video content holds immense value—but its full potential remains untapped if it’s unstructured, unsearchable, or difficult to access. Most organizations don’t treat media as data, creating inefficiencies and missed opportunities—Veritone changes that.",
            imgSrc1: "/images/women.png",
            imgSrc2: "/images/hire-2.png",
        },
        {
            title: "Public Sector",
            Heading: "Public Sector",
Data:"Automate lengthy and tedious manual processes with powerful AI solutions made for law enforcement agencies and legal teams. Veritone’s AI for the public sector can save hundreds of hours so they can spend more time keeping communities safe.",            imgSrc1: "/images/nile-banner.png",
imgSrc1: "/images/counrty-flags.png",            
imgSrc2: "/images/boy-dog.png",
        },
        {
            title: "Talent Acquisition",
            Heading: "Get more from your media",
            Data:"Empower your talent acquisition team to find the best-fit candidates even faster with AI tools that optimize ad spend and hiring workflows. This is hiring as you’ve never seen it before.",            imgSrc1: "/images/nile-banner.png",
            imgSrc1: "/images/boy-dog.png",
            imgSrc2: "/images/hire-2.png",
        },
        {
            title: "Other industries",
            Heading: "AI solutions, ready for all.",
            Data:"Whether it’s in healthcare, finance, retail, or another field, our AI solutions have helped businesses elevate what they are capable of doing. With these tools, countless businesses have grown their revenue, increased efficiency, and delivered effective results for their customers.",
            imgSrc1: "/images/hire-2.png",            
            imgSrc2: "/images/women.png",
        },
    ]
    
    
    const handleTabClick = (index) => {
        setActiveTab(index);
        setIsDropdownOpen(false);
    };
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const currentTab = tabdata[activeTab]
    return(
        <section className="tab bg-white">
            <div className="container">
                {/*destop tabs*/ }

                    <div className={`text-black flex justify-between  ${styles.tabhead}` }>
                        {tabdata.map((tabs, index) => (
                            <button
                            key={index}
                            className={`tabname text-2xl relative ${styles.tabname} ${activeTab === index ? styles.active : "" }`}
                            onClick={() => handleTabClick(index)}
                            >
                                  {tabs.title}
                            </button>
                        ))}
                    </div>
                     {/* Mobile Dropdown */}
<div className={styles.mobileDropdown}>
  <button
    className={styles.DropdownToggle}
    onClick={toggleDropdown}
  >
    {tabdata[activeTab].title}
    <span className={styles.arrow}></span>
  </button>

  {isDropdownOpen && (
    <div className={styles.dropdownMenu}>
      {tabdata.map((tabs, index) => (
        <button
          key={index}
          className={`${styles.dropdownItem} ${
            activeTab === index ? styles.active : ""
          }`}
          onClick={() => handleTabClick(index)}
        >
          {tabs.title}
        </button>
      ))}
    </div>
  )}
</div>

                    {/* Tab Data */}
                    <div className="tabData  mt-10">
                        <div className="wrapper flex justify-around mt-24 md:block md:mt-0">
                            <div className="innerWrap w-[60%] mr-9 md:w-full">
                                <h3 className="tabheading text-black">{currentTab.Heading}</h3>
                                <p className="tabdata text-black mt-7 max-w-[580px] md:max-w-full">{currentTab.Data}</p>
                                <div class="btnWrap mt-[20px]"><a href="#" class="pink-btn link-white text-white" data-cursor-expand="">View all case studies</a></div>
                            </div>
                            <div className="col-three w-[40%] md:w-full">
                            <div className="imgWrap w-[360px]  h-[240px] flex justify-start absolute md:mt-7 md:inline-block md:relative">
                                <img
                                className="max-w-[360px] max-h-[240px] md:max-w-[280px] md:max-h-[200px] block object-cover h-full w-full"
                                src={currentTab.imgSrc1}
                                alt={currentTab.alt}
                                loading="lazy"
                                />
                            </div>
                            <div className="imgWrap w-[360px]  h-[240px] md:max-w-[280px] md:max-h-[200px] absolute flex justify-end right-0 top-24 md:relative md:top-0">
                                <img 
                                    className=" max-w-[360px] max-h-[240px] block object-cover h-full w-full"
                                    src={currentTab.imgSrc2}
                                    alt={currentTab.alt}
                                    loading="lazy"
                                />
                            </div>
                            
                            </div>
                            
                        </div>
                    </div>
                </div>
        </section>
    )
}
export default Tab;