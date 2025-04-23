// components/ResourceFilter.jsx
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "@/styles/ResourceFilter.module.css";

const ResourceFilter = () => {
  const data = [
    {
      link: "https://www.youtube.com/",
      src: "/images/sift.jpg",
      year: "2025",
      topic: "Topic-one",
      title: "Item Title 1",
      blurb: "Description of item 1.",
    },
    {
      link: "https://www.google.com/",
      src: "/images/Latest-Brand-featured.jpg",
      year: "2021",
      topic: "Topic-Two",
      title: "Item Title 2",
      blurb: "Description of item 2.",
    },
    {
      link: "https://www.youtube.com/",
      src: "/images/Clear-Outline-C-Inisghts.jpg",
      year: "2020",
      topic: "Topic-Two",
      title: "Item Title 3",
      blurb: "Description of item 3.",
    },
    {
      link: "https://www.google.com/",
      src: "/images/sailpoint-feature.png",
      year: "2022",
      topic: "Topic-one",
      title: "Item Title 4",
      blurb: "Description of item 4.",
    },
    {
      link: "https://www.youtube.com/",
      src: "/images/Clear_ViralNation_background_Image.png",
      year: "2023",
      topic: "Topic-Three",
      title: "Item Title 5",
      blurb: "Description of item 5.",
    },
    {
      link: "https://www.google.com/",
      src: "/images/Clear-Outline-C-Inisghts.jpg",
      year: "2024",
      topic: "Topic-one",
      title: "Item Title 6",
      blurb: "Description of item 6.",
    },
    {
      link: "https://www.youtube.com/",
      src: "/images/Default-Case-Study-Card.png",
      year: "2022",
      topic: "Topic-one",
      title: "Item Title 7",
      blurb: "Description of item 7.",
    },
    {
      link: "https://www.google.com/",
      src: "/images/Clear-Outline-C-Inisghts.jpg",
      year: "2023",
      topic: "Topic-one",
      title: "Item Title 8",
      blurb: "Description of item 8.",
    },
    {
      link: "https://www.youtube.com/",
      src: "/images/Latest-Brand-featured.jpg",
      year: "2025",
      topic: "Topic-Two",
      title: "Item Title 9",
      blurb: "Description of item 9.",
    },
    {
      link: "https://www.google.com/",
      src: "/images/CTA-Image-1350.jpg",
      year: "2023",
      topic: "Topic-one",
      title: "Item Title 10",
      blurb: "Description of item 10.",
    },
    {
      link: "https://www.youtube.com/",
      src: "/images/Clear-Outline-C-Inisghts.jpg",
      year: "2025",
      topic: "Topic-Two",
      title: "Item Title 11",
      blurb: "Description of item 11.",
    },
    {
      link: "https://www.google.com/",
      src: "/images/Latest-Brand-featured.jpg",
      year: "2025",
      topic: "Topic-Two",
      title: "Item Title 12",
      blurb: "Description of item 12.",
    },
    {
      link: "https://www.youtube.com/",
      src: "/images/CTA-Image-1350.jpg",
      year: "2023",
      topic: "Topic-one",
      title: "Item Title 13",
      blurb: "Description of item 13.",
    },
    {
      link: "https://www.google.com/",
      src: "/images/Clear-Outline-C-Inisghts.jpg",
      year: "2025",
      topic: "Topic-Two",
      title: "Item Title 14",
      blurb: "Description of item 14.",
    },
    {
      link: "https://www.youtube.com/",
      src: "/images/Default-Case-Study-Card.png",
      year: "2022",
      topic: "Topic-Four",
      title: "Item Title 15",
      blurb: "Description of item 15.",
    },
    {
      link: "https://www.google.com/",
      src: "/images/Clear-Outline-C-Inisghts.jpg",
      year: "2020",
      topic: "Topic-Two",
      title: "Item Title 16",
      blurb: "Description of item 16.",
    },
    {
      link: "https://www.youtube.com/",
      src: "/images/Latest-Brand-featured.jpg",
      year: "2021",
      topic: "Topic-Three",
      title: "Item Title 17",
      blurb: "Description of item 17.",
    },
    {
      link: "https://www.google.com/",
      src: "/images/Latest-Brand-featured.jpg",
      year: "2024",
      topic: "Topic-Four",
      title: "Item Title 18",
      blurb: "Description of item 18.",
    },
    {
      link: "https://www.youtube.com/",
      src: "/images/Latest-Brand-featured.jpg",
      year: "2023",
      topic: "Topic-Two",
      title: "Item Title 19",
      blurb: "Description of item 19.",
    },
    {
      link: "https://www.google.com/",
      src: "/images/Clear-Outline-C-Inisghts.jpg",
      year: "2024",
      topic: "Topic-Two",
      title: "Item Title 20",
      blurb: "Description of item 20.",
    },
  ];

  const [selectedYears, setSelectedYears] = useState(new Set());
  const [selectedTopics, setSelectedTopics] = useState(new Set());
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isYearOpen, setIsYearOpen] = useState(false);
  const [isTopicOpen, setIsTopicOpen] = useState(false);
  const [yearListHeight, setYearListHeight] = useState(0);
  const [topicListHeight, setTopicListHeight] = useState(0);
  const maxItems = 9;

  const yearRef = useRef(null);
  const topicRef = useRef(null);
  const yearListRef = useRef(null);
  const topicListRef = useRef(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const years = new Set(urlParams.getAll("year"));
    const topics = new Set(urlParams.getAll("topic"));
    const page = parseInt(urlParams.get("page")) || 1;
    const search = urlParams.get("search") || "";

    setSelectedYears(years);
    setSelectedTopics(topics);
    setCurrentPage(page);
    setSearchText(search);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (yearRef.current && !yearRef.current.contains(event.target))
        setIsYearOpen(false);
      if (topicRef.current && !topicRef.current.contains(event.target))
        setIsTopicOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    updateURLParams();
  }, [selectedYears, selectedTopics, currentPage, searchText]);

  // Calculate list heights when dropdowns open
  useEffect(() => {
    if (isYearOpen && yearListRef.current) {
      const height = yearListRef.current.scrollHeight;
      setYearListHeight(height);
    } else {
      setYearListHeight(0);
    }

    if (isTopicOpen && topicListRef.current) {
      const height = topicListRef.current.scrollHeight;
      setTopicListHeight(height);
    } else {
      setTopicListHeight(0);
    }
  }, [isYearOpen, isTopicOpen]);

  const updateURLParams = () => {
    const url = new URL(window.location);
    url.searchParams.delete("year");
    url.searchParams.delete("topic");
    url.searchParams.delete("page");
    url.searchParams.delete("search");

    if (currentPage > 1) url.searchParams.set("page", currentPage);
    selectedYears.forEach((year) => url.searchParams.append("year", year));
    selectedTopics.forEach((topic) => url.searchParams.append("topic", topic));
    if (searchText) url.searchParams.set("search", searchText);

    window.history.replaceState({}, "", url);
  };

  const filterItems = () => {
    let filteredItems = data;

    if (selectedYears.size > 0) {
      filteredItems = filteredItems.filter((item) =>
        selectedYears.has(item.year)
      );
    }

    if (selectedTopics.size > 0) {
      filteredItems = filteredItems.filter((item) =>
        selectedTopics.has(item.topic)
      );
    }

    if (searchText) {
      filteredItems = filteredItems.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    const totalItems = filteredItems.length;
    const totalPages = Math.ceil(totalItems / maxItems);
    const start = (currentPage - 1) * maxItems;
    const end = start + maxItems;

    return {
      itemsToShow: filteredItems.slice(start, end),
      totalItems,
      totalPages,
    };
  };

  const updatePaginationButtons = (totalPages) => {
    const buttons = [];
    if (totalPages > 1) {
      buttons.push(
        <li
          key="prev"
          className={`${styles.paginationItem} ${
            currentPage === 1 ? styles.disabled : ""
          }`}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <svg
            width="16"
            height="13"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.0332 11.4861L0.99991 6.24307L6.0332 1.00006"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.6318 6.24304L1 6.24304"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </li>
      );
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(
          <li
            key={i}
            className={`${styles.paginationItem} ${
              i === currentPage ? styles.active : ""
            }`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </li>
        );
      }
      buttons.push(
        <li
          key="next"
          className={`${styles.paginationItem} ${
            currentPage === totalPages ? styles.disabled : ""
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <svg
            width="16"
            height="13"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.59827 11.8596L14.6316 6.61661L9.59827 1.37359"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 6.61658L14.6318 6.61658"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </li>
      );
    }
    return buttons;
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > Math.ceil(filterItems().totalItems / maxItems))
      return;
    setCurrentPage(page);
    window.scrollTo({
      top: document.querySelector(`.${styles.resourceFilter}`).offsetTop,
      behavior: "smooth",
    });
  };

  const handleYearClick = (year) => {
    const newYears = new Set(selectedYears);
    if (year === "All") {
      newYears.clear();
    } else {
      if (newYears.has(year)) newYears.delete(year);
      else newYears.add(year);
    }
    setSelectedYears(newYears);
    setCurrentPage(1);
  };

  const handleTopicClick = (topic) => {
    const newTopics = new Set(selectedTopics);
    if (topic === "All") {
      newTopics.clear();
    } else {
      if (newTopics.has(topic)) newTopics.delete(topic);
      else newTopics.add(topic);
    }
    setSelectedTopics(newTopics);
    setCurrentPage(1);
  };

  const handleBadgeRemove = (type, value) => {
    if (type === "year") {
      const newYears = new Set(selectedYears);
      newYears.delete(value);
      setSelectedYears(newYears);
    } else if (type === "topic") {
      const newTopics = new Set(selectedTopics);
      newTopics.delete(value);
      setSelectedTopics(newTopics);
    }
    setCurrentPage(1);
  };

  const handleClearAll = () => {
    setSelectedYears(new Set());
    setSelectedTopics(new Set());
    setSearchText("");
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    setCurrentPage(1);
  };

  const toggleYearDropdown = () => setIsYearOpen((prev) => !prev);
  const toggleTopicDropdown = () => setIsTopicOpen((prev) => !prev);

  const { itemsToShow, totalItems, totalPages } = filterItems();

  return (
    <section className={`${styles.resourceFilter} bg-black`}>
      <div className="container">
        <div className="introWrap text-center">
          <h3 className="text-white pb-[40px]">Resource</h3>
        </div>
        <div className="outerWrap flex flex-wrap gap-[10px] pb-[17px]  sm:grid">
          <h4 className="mr-[263px] text-white tablet:w-full lg:mb-[10px] tablet:mr-[0] md:mr-[0] md:w-full ">
            LATEST
          </h4>
          <div
            className={`navWrapper mr-[22px] sm:mr-0 ${styles.navWrapper}`}
            ref={yearRef}
          >
            <div
              className={`tableTitle text-white w-[265px] sm:w-[100%] ${
                styles.tableTitle
              } ${isYearOpen ? styles.active : ""}`}
              onClick={toggleYearDropdown}
            >
              <p>Year</p>
            </div>
            <ul
              className={`list w-[265px] sm:w-[100%] ${styles.list} ${
                isYearOpen ? styles.active : ""
              }`}
              id="year"
              ref={yearListRef}
              style={{ maxHeight: isYearOpen ? `${yearListHeight}px` : "0px" }}
            >
              <li
                className={selectedYears.size === 0 ? styles.active : ""}
                onClick={() => handleYearClick("All")}
              >
                All
              </li>
              {["2020", "2021", "2022", "2023", "2024", "2025"].map((year) => (
                <li
                  key={year}
                  className={selectedYears.has(year) ? styles.active : ""}
                  onClick={() => handleYearClick(year)}
                >
                  <span>{year}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`navWrapper mr-[22px] sm:mr-0 ${styles.navWrapper}`}
            ref={topicRef}
          >
            <div
              className={`tableTitle text-white  w-[265px] sm:w-[100%] ${
                styles.tableTitle
              } ${isTopicOpen ? styles.active : ""}`}
              onClick={toggleTopicDropdown}
            >
              <p>Topic</p>
            </div>
            <ul
              className={`list w-[265px] sm:w-[100%] ${styles.list} ${
                isTopicOpen ? styles.active : ""
              }`}
              id="glossary_block"
              ref={topicListRef}
              style={{
                maxHeight: isTopicOpen ? `${topicListHeight}px` : "0px",
              }}
            >
              <li
                className={selectedTopics.size === 0 ? styles.active : ""}
                onClick={() => handleTopicClick("All")}
              >
                All
              </li>
              {["Topic-one", "Topic-Two", "Topic-Three", "Topic-Four"].map(
                (topic) => (
                  <li
                    key={topic}
                    className={selectedTopics.has(topic) ? styles.active : ""}
                    onClick={() => handleTopicClick(topic)}
                  >
                    <span>{topic}</span>
                  </li>
                )
              )}
            </ul>
          </div>
          <div
            className={`inputWrapper relative max-w-[373px] sm:max-w-[100%] ${styles.inputWrapper}`}
          >
            <input
              className="search w-full outline-none pl-[20px] pr-[60px] h-[46px] bg-transparent text-white"
              type="text"
              placeholder="Search"
              value={searchText}
              onChange={handleSearchChange}
            />
            <div className="search-btn absolute right-[5px] w-[18px] h-[18px] bottom-[11px] cursor-pointer">
              <Image
                src="/images/search-white.svg"
                alt="search icon"
                width={18}
                height={18}
              />
            </div>
          </div>
        </div>
        <div className="lenthItems">
          <span className="totalReslut text-white">{totalItems} Results</span>
        </div>
        <div className="FilterContentWrap mt-[30px]">
          <div className="FilterBoxWrap">
            <div
              className={`FieldWrap ${styles.FieldWrap} ${
                selectedYears.size > 0 || selectedTopics.size > 0
                  ? styles.active
                  : ""
              }`}
            >
              {Array.from(selectedYears).map((year) => (
                <span
                  key={year}
                  className={`${styles.FilterBadge}`}
                  onClick={() => handleBadgeRemove("year", year)}
                >
                  {year}
                </span>
              ))}
              {Array.from(selectedTopics).map((topic) => (
                <span
                  key={topic}
                  className={`${styles.FilterBadge}`}
                  onClick={() => handleBadgeRemove("topic", topic)}
                >
                  {topic}
                </span>
              ))}
            </div>
            <div
              className={`clearBtn ${styles.clearBtn} ${
                selectedYears.size > 0 || selectedTopics.size > 0 || searchText
                  ? styles.active
                  : ""
              }`}
            >
              <h6
                className="text-[#fa198c] font-bold  cursor-pointer"
                onClick={handleClearAll}
              >
                Clear All
              </h6>
            </div>
          </div>
          <div className="innerWrap flex flex-wrap w-[calc(100%+20px)] ml-[-10px] md:block md:w-full md:mx-0">
            {itemsToShow.map((item, index) => (
              <div
                key={index}
                className="itemWrap relative mb-[20px] w-[calc(33.33%-20px)] mx-[10px] tablet:w-[calc(50%-20px)] md:block md:w-full md:mx-0"
              >
                <a
                  className="Nolink absolute w-full h-full left-0  top-0 z-[1] text-[0]"
                  href={item.link}
                >
                  .
                </a>
                <div className="contentInner">
                  <div className="imgWrap h-[280px] overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={500}
                      height={500}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <div className="bodyContent pt-[25px]">
                    <h6 className="text-white">
                      {item.year} | {item.topic}
                    </h6>
                    <h4 className="text-white pt-[10px]">{item.title}</h4>
                    <p className="text-white pt-[10px]">{item.blurb}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className={`no-result text-center ${styles.noResult} ${
              totalItems === 0 ? styles.active : ""
            }`}
          >
            <h2 className="text-[#fa198c] font-bold capitalize">
              No result found
            </h2>
          </div>
          <div
            className={`pagination-button py-[20px] ${
              totalItems > maxItems ? styles.active : ""
            }`}
          >
            <div className="inner-wrapper text-center">
              <ul className="flex justify-center">
                {updatePaginationButtons(totalPages)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceFilter;
