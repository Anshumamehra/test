"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "@/styles/BlogFilter.module.css";

const BlogFilter = () => {
  const data = [
    {
      link: "https://www.google.com/",
      src: "/images/sift.jpg",
      year: "2025",
      topic: "Topic-one",
      solution: "Solution One",
      product: "Product One",
      type: "Type One",
      title: "Item Title 1",
      blurb: "Description of item 1.",
    },
    {
      link: "https://www.youtube.com/",
      src: "/images/Latest-Brand-featured.jpg",
      year: "2021",
      topic: "Topic-Two",
      solution: "Solution Two",
      product: "Product Two",
      type: "Type Two",
      title: "Item Title 2",
      blurb: "Description of item 2.",
    },
    {
      link: "https://www.google.com/",
      src: "/images/Clear-Outline-C-Inisghts.jpg",
      year: "2020",
      topic: "Topic-Two",
      solution: "Solution Three",
      product: "Product Three",
      type: "Type Three",
      title: "Item Title 3",
      blurb: "Description of item 3.",
    },
    {
      link: "https://www.youtube.com/",
      src: "/images/sailpoint-feature.png",
      year: "2022",
      topic: "Topic-one",
      solution: "Solution One",
      product: "Product One",
      type: "Type One",
      title: "Item Title 4",
      blurb: "Description of item 4.",
    },
    {
      link: "https://www.google.com/",
      src: "/images/Clear_ViralNation_background_Image.png",
      year: "2023",
      topic: "Topic-Three",
      solution: "Solution Two",
      product: "Product Two",
      type: "Type Two",
      title: "Item Title 5",
      blurb: "Description of item 5.",
    },
    {
      link: "https://www.youtube.com/",
      src: "/images/Clear-Outline-C-Inisghts.jpg",
      year: "2024",
      topic: "Topic-one",
      solution: "Solution Three",
      product: "Product Three",
      type: "Type Three",
      title: "Item Title 6",
      blurb: "Description of item 6.",
    },
    {
      link: "https://www.google.com/",
      src: "/images/Default-Case-Study-Card.png",
      year: "2022",
      topic: "Topic-one",
      solution: "Solution One",
      product: "Product One",
      type: "Type One",
      title: "Item Title 7",
      blurb: "Description of item 7.",
    },
    {
      link: "https://www.youtube.com/",
      src: "/images/Clear-Outline-C-Inisghts.jpg",
      year: "2023",
      topic: "Topic-one",
      solution: "Solution Two",
      product: "Product Two",
      type: "Type Two",
      title: "Item Title 8",
      blurb: "Description of item 8.",
    },
    {
      link: "https://www.google.com/",
      src: "/images/Latest-Brand-featured.jpg",
      year: "2025",
      topic: "Topic-Two",
      solution: "Solution Three",
      product: "Product Three",
      type: "Type Three",
      title: "Item Title 9",
      blurb: "Description of item 9.",
    },
    {
      link: "https://www.youtube.com/",
      src: "/images/Clear-White-C-Inisght.jpg",
      year: "2023",
      topic: "Topic-one",
      solution: "Solution One",
      product: "Product One",
      type: "Type One",
      title: "Item Title 10",
      blurb: "Description of item 10.",
    },
    {
      link: "https://www.google.com/",
      src: "/images/Clear-Outline-C-Inisghts.jpg",
      year: "2025",
      topic: "Topic-Two",
      solution: "Solution Two",
      product: "Product Two",
      type: "Type Two",
      title: "Item Title 11",
      blurb: "Description of item 11.",
    },
    {
      link: "https://www.youtube.com/",
      src: "/images/Latest-Brand-featured.jpg",
      year: "2025",
      topic: "Topic-Two",
      solution: "Solution Three",
      product: "Product Three",
      type: "Type Three",
      title: "Item Title 12",
      blurb: "Description of item 12.",
    },
    {
      link: "https://www.google.com/",
      src: "/images/Clear-White-C-Inisght.jpg",
      year: "2023",
      topic: "Topic-one",
      solution: "Solution One",
      product: "Product One",
      type: "Type One",
      title: "Item Title 13",
      blurb: "Description of item 13.",
    },
    {
      link: "https://www.youtube.com/",
      src: "/images/Clear-Outline-C-Inisghts.jpg",
      year: "2025",
      topic: "Topic-Two",
      solution: "Solution Two",
      product: "Product Two",
      type: "Type Two",
      title: "Item Title 14",
      blurb: "Description of item 14.",
    },
    {
      link: "https://www.google.com/",
      src: "/images/Default-Case-Study-Card.png",
      year: "2022",
      topic: "Topic-Four",
      solution: "Solution Three",
      product: "Product Three",
      type: "Type Three",
      title: "Item Title 15",
      blurb: "Description of item 15.",
    },
    {
      link: "https://www.youtube.com/",
      src: "/images/Clear-Outline-C-Inisghts.jpg",
      year: "2020",
      topic: "Topic-Two",
      solution: "Solution One",
      product: "Product One",
      type: "Type One",
      title: "Item Title 16",
      blurb: "Description of item 16.",
    },
    {
      link: "https://www.google.com/",
      src: "/images/Latest-Brand-featured.jpg",
      year: "2021",
      topic: "Topic-Three",
      solution: "Solution Two",
      product: "Product Two",
      type: "Type Two",
      title: "Item Title 17",
      blurb: "Description of item 17.",
    },
    {
      link: "https://www.youtube.com/",
      src: "/images/Latest-Brand-featured.jpg",
      year: "2024",
      topic: "Topic-Four",
      solution: "Solution Three",
      product: "Product Three",
      type: "Type Three",
      title: "Item Title 18",
      blurb: "Description of item 18.",
    },
    {
      link: "https://www.google.com/",
      src: "/images/Latest-Brand-featured.jpg",
      year: "2023",
      topic: "Topic-Two",
      solution: "Solution One",
      product: "Product One",
      type: "Type One",
      title: "Item Title 19",
      blurb: "Description of item 19.",
    },
    {
      link: "https://www.youtube.com/",
      src: "/images/Clear-Outline-C-Inisghts.jpg",
      year: "2024",
      topic: "Topic-Two",
      solution: "Solution Two",
      product: "Product Two",
      type: "Type Two",
      title: "Item Title 20",
      blurb: "Description of item 20.",
    },
    {
      link: "https://www.google.com/",
      src: "/images/Clear-White-C-Inisght.jpg",
      year: "2024",
      topic: "Topic-Two",
      solution: "Solution Two",
      product: "Product One",
      type: "Type One",
      title: "Item Title 23",
      blurb: "Description of item 23.",
    },
    {
      link: "https://www.youtube.com/",
      src: "/images/Clear-Outline-C-Inisghts.webp",
      year: "2024",
      topic: "Topic-Two",
      solution: "Solution Two",
      product: "Product One",
      type: "Type Two",
      title: "Item Title 22",
      blurb: "Description of item 22.",
    },
    {
      link: "https://www.youtube.com/",
      src: "/images/Clear-White-C-Inisght.jpg",
      year: "2022",
      topic: "Topic-Two",
      solution: "Solution Two",
      product: "Product One",
      type: "Type Owo",
      title: "Item Title 23",
      blurb: "Description of item 23.",
    },
    {
      link: "https://www.google.com/",
      src: "/images/sift.jpg",
      year: "2024",
      topic: "Topic-one",
      solution: "Solution Two",
      product: "Product One",
      type: "Type One",
      title: "Item Title 24",
      blurb: "Description of item 24.",
    },
  ];

  const [selectedYears, setSelectedYears] = useState(new Set());
  const [selectedTopics, setSelectedTopics] = useState(new Set());
  const [selectedSolutions, setSelectedSolutions] = useState(new Set());
  const [selectedProducts, setSelectedProducts] = useState(new Set());
  const [selectedTypes, setSelectedTypes] = useState(new Set());
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isYearOpen, setIsYearOpen] = useState(false);
  const [isTopicOpen, setIsTopicOpen] = useState(false);
  const [isSolutionOpen, setIsSolutionOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState("");
  const [yearListHeight, setYearListHeight] = useState(0);
  const [topicListHeight, setTopicListHeight] = useState(0);
  const [solutionListHeight, setSolutionListHeight] = useState(0);
  const [productListHeight, setProductListHeight] = useState(0);
  const [typeListHeight, setTypeListHeight] = useState(0);
  const [sortListHeight, setSortListHeight] = useState(0);
  const maxItems = 9;

  const yearRef = useRef(null);
  const topicRef = useRef(null);
  const solutionRef = useRef(null);
  const productRef = useRef(null);
  const typeRef = useRef(null);
  const sortRef = useRef(null);
  const yearListRef = useRef(null);
  const topicListRef = useRef(null);
  const solutionListRef = useRef(null);
  const productListRef = useRef(null);
  const typeListRef = useRef(null);
  const sortListRef = useRef(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const years = new Set(urlParams.getAll("year"));
    const topics = new Set(urlParams.getAll("topic"));
    const solutions = new Set(urlParams.getAll("solution"));
    const products = new Set(urlParams.getAll("product"));
    const types = new Set(urlParams.getAll("type"));
    const page = parseInt(urlParams.get("page")) || 1;
    const search = urlParams.get("search") || "";
    const sort = urlParams.get("sort") || "";

    setSelectedYears(years);
    setSelectedTopics(topics);
    setSelectedSolutions(solutions);
    setSelectedProducts(products);
    setSelectedTypes(types);
    setCurrentPage(page);
    setSearchText(search);
    setSortOrder(sort);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (yearRef.current && !yearRef.current.contains(event.target))
        setIsYearOpen(false);
      if (topicRef.current && !topicRef.current.contains(event.target))
        setIsTopicOpen(false);
      if (solutionRef.current && !solutionRef.current.contains(event.target))
        setIsSolutionOpen(false);
      if (productRef.current && !productRef.current.contains(event.target))
        setIsProductOpen(false);
      if (typeRef.current && !typeRef.current.contains(event.target))
        setIsTypeOpen(false);
      if (sortRef.current && !sortRef.current.contains(event.target))
        setIsSortOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    updateURLParams();
  }, [
    selectedYears,
    selectedTopics,
    selectedSolutions,
    selectedProducts,
    selectedTypes,
    currentPage,
    searchText,
    sortOrder,
  ]);

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

    if (isSolutionOpen && solutionListRef.current) {
      const height = solutionListRef.current.scrollHeight;
      setSolutionListHeight(height);
    } else {
      setSolutionListHeight(0);
    }

    if (isProductOpen && productListRef.current) {
      const height = productListRef.current.scrollHeight;
      setProductListHeight(height);
    } else {
      setProductListHeight(0);
    }

    if (isTypeOpen && typeListRef.current) {
      const height = typeListRef.current.scrollHeight;
      setTypeListHeight(height);
    } else {
      setTypeListHeight(0);
    }

    if (isSortOpen && sortListRef.current) {
      const height = sortListRef.current.scrollHeight;
      setSortListHeight(height);
    } else {
      setSortListHeight(0);
    }
  }, [
    isYearOpen,
    isTopicOpen,
    isSolutionOpen,
    isProductOpen,
    isTypeOpen,
    isSortOpen,
  ]);

  const updateURLParams = () => {
    const url = new URL(window.location);
    url.searchParams.delete("year");
    url.searchParams.delete("topic");
    url.searchParams.delete("solution");
    url.searchParams.delete("product");
    url.searchParams.delete("type");
    url.searchParams.delete("page");
    url.searchParams.delete("search");
    url.searchParams.delete("sort");

    if (currentPage > 1) url.searchParams.set("page", currentPage);
    selectedYears.forEach((year) => url.searchParams.append("year", year));
    selectedTopics.forEach((topic) => url.searchParams.append("topic", topic));
    selectedSolutions.forEach((solution) =>
      url.searchParams.append("solution", solution)
    );
    selectedProducts.forEach((product) =>
      url.searchParams.append("product", product)
    );
    selectedTypes.forEach((type) => url.searchParams.append("type", type));
    if (searchText) url.searchParams.set("search", searchText);
    if (sortOrder) url.searchParams.set("sort", sortOrder);

    window.history.replaceState({}, "", url);
  };

  const filterItems = () => {
    let filteredItems = [...data];

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

    if (selectedSolutions.size > 0) {
      filteredItems = filteredItems.filter((item) =>
        selectedSolutions.has(item.solution)
      );
    }

    if (selectedProducts.size > 0) {
      filteredItems = filteredItems.filter((item) =>
        selectedProducts.has(item.product)
      );
    }

    if (selectedTypes.size > 0) {
      filteredItems = filteredItems.filter((item) =>
        selectedTypes.has(item.type)
      );
    }

    if (searchText) {
      filteredItems = filteredItems.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (sortOrder === "asc") {
      filteredItems.sort((a, b) => parseInt(a.year) - parseInt(b.year));
    } else if (sortOrder === "desc") {
      filteredItems.sort((a, b) => parseInt(b.year) - parseInt(a.year));
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
      top: document.querySelector(`.${styles.BlogFilter}`).offsetTop,
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

  const handleSolutionClick = (solution) => {
    const newSolutions = new Set(selectedSolutions);
    if (solution === "All") {
      newSolutions.clear();
    } else {
      if (newSolutions.has(solution)) newSolutions.delete(solution);
      else newSolutions.add(solution);
    }
    setSelectedSolutions(newSolutions);
    setCurrentPage(1);
  };

  const handleProductClick = (product) => {
    const newProducts = new Set(selectedProducts);
    if (product === "All") {
      newProducts.clear();
    } else {
      if (newProducts.has(product)) newProducts.delete(product);
      else newProducts.add(product);
    }
    setSelectedProducts(newProducts);
    setCurrentPage(1);
  };

  const handleTypeClick = (type) => {
    const newTypes = new Set(selectedTypes);
    if (type === "All") {
      newTypes.clear();
    } else {
      if (newTypes.has(type)) newTypes.delete(type);
      else newTypes.add(type);
    }
    setSelectedTypes(newTypes);
    setCurrentPage(1);
  };

  const handleSortClick = (order) => {
    if (order === "all") {
      // Changed "none" to "all"
      setSortOrder("");
    } else {
      setSortOrder(order);
    }
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
    } else if (type === "solution") {
      const newSolutions = new Set(selectedSolutions);
      newSolutions.delete(value);
      setSelectedSolutions(newSolutions);
    } else if (type === "product") {
      const newProducts = new Set(selectedProducts);
      newProducts.delete(value);
      setSelectedProducts(newProducts);
    } else if (type === "type") {
      const newTypes = new Set(selectedTypes);
      newTypes.delete(value);
      setSelectedTypes(newTypes);
    }
    setCurrentPage(1);
  };

  const handleClearAll = () => {
    setSelectedYears(new Set());
    setSelectedTopics(new Set());
    setSelectedSolutions(new Set());
    setSelectedProducts(new Set());
    setSelectedTypes(new Set());
    setSearchText("");
    setSortOrder(""); // Reset to no sorting
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    setCurrentPage(1);
  };

  const toggleYearDropdown = () => setIsYearOpen((prev) => !prev);
  const toggleTopicDropdown = () => setIsTopicOpen((prev) => !prev);
  const toggleSolutionDropdown = () => setIsSolutionOpen((prev) => !prev);
  const toggleProductDropdown = () => setIsProductOpen((prev) => !prev);
  const toggleTypeDropdown = () => setIsTypeOpen((prev) => !prev);
  const toggleSortDropdown = () => setIsSortOpen((prev) => !prev);

  const { itemsToShow, totalItems, totalPages } = filterItems();

  return (
    <section className={`${styles.BlogFilter} bg-black`}>
      <div className="container">
        <div className="introWrap text-center">
          <h3 className="text-white pb-[40px]">Blog</h3>
        </div>
        <div className="outerWrap flex flex-wrap gap-[10px] pb-[17px] sm:grid">
          <h4 className="mr-[263px] text-white tablet:w-full lg:mb-[10px] tablet:mr-[0] md:mr-[0] md:w-full">
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
              className={`tableTitle text-white w-[265px] sm:w-[100%] ${
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
            className={`navWrapper mr-[22px] sm:mr-0 ${styles.navWrapper}`}
            ref={solutionRef}
          >
            <div
              className={`tableTitle text-white w-[265px] sm:w-[100%] ${
                styles.tableTitle
              } ${isSolutionOpen ? styles.active : ""}`}
              onClick={toggleSolutionDropdown}
            >
              <p>Solution</p>
            </div>
            <ul
              className={`list w-[265px] sm:w-[100%] ${styles.list} ${
                isSolutionOpen ? styles.active : ""
              }`}
              id="solution_block"
              ref={solutionListRef}
              style={{
                maxHeight: isSolutionOpen ? `${solutionListHeight}px` : "0px",
              }}
            >
              <li
                className={selectedSolutions.size === 0 ? styles.active : ""}
                onClick={() => handleSolutionClick("All")}
              >
                All
              </li>
              {["Solution One", "Solution Two", "Solution Three"].map(
                (solution) => (
                  <li
                    key={solution}
                    className={
                      selectedSolutions.has(solution) ? styles.active : ""
                    }
                    onClick={() => handleSolutionClick(solution)}
                  >
                    <span>{solution}</span>
                  </li>
                )
              )}
            </ul>
          </div>
          <div
            className={`navWrapper mr-[22px] sm:mr-0 ${styles.navWrapper}`}
            ref={productRef}
          >
            <div
              className={`tableTitle text-white w-[265px] sm:w-[100%] ${
                styles.tableTitle
              } ${isProductOpen ? styles.active : ""}`}
              onClick={toggleProductDropdown}
            >
              <p>Product</p>
            </div>
            <ul
              className={`list w-[265px] sm:w-[100%] ${styles.list} ${
                isProductOpen ? styles.active : ""
              }`}
              id="product_block"
              ref={productListRef}
              style={{
                maxHeight: isProductOpen ? `${productListHeight}px` : "0px",
              }}
            >
              <li
                className={selectedProducts.size === 0 ? styles.active : ""}
                onClick={() => handleProductClick("All")}
              >
                All
              </li>
              {["Product One", "Product Two", "Product Three"].map(
                (product) => (
                  <li
                    key={product}
                    className={
                      selectedProducts.has(product) ? styles.active : ""
                    }
                    onClick={() => handleProductClick(product)}
                  >
                    <span>{product}</span>
                  </li>
                )
              )}
            </ul>
          </div>
          <div
            className={`navWrapper mr-[22px] sm:mr-0 ${styles.navWrapper}`}
            ref={typeRef}
          >
            <div
              className={`tableTitle text-white w-[265px] sm:w-[100%] ${
                styles.tableTitle
              } ${isTypeOpen ? styles.active : ""}`}
              onClick={toggleTypeDropdown}
            >
              <p>Type</p>
            </div>
            <ul
              className={`list w-[265px] sm:w-[100%] ${styles.list} ${
                isTypeOpen ? styles.active : ""
              }`}
              id="type_block"
              ref={typeListRef}
              style={{
                maxHeight: isTypeOpen ? `${typeListHeight}px` : "0px",
              }}
            >
              <li
                className={selectedTypes.size === 0 ? styles.active : ""}
                onClick={() => handleTypeClick("All")}
              >
                All
              </li>
              {["Type One", "Type Two", "Type Three"].map((type) => (
                <li
                  key={type}
                  className={selectedTypes.has(type) ? styles.active : ""}
                  onClick={() => handleTypeClick(type)}
                >
                  <span>{type}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`navWrapper mr-[22px] sm:mr-0 ${styles.navWrapper}`}
            ref={sortRef}
          >
            <div
              className={`tableTitle text-white w-[265px] sm:w-[100%] ${
                styles.tableTitle
              } ${isSortOpen ? styles.active : ""}`}
              onClick={toggleSortDropdown}
            >
              <p>Sorting</p>
            </div>
            <ul
              className={`list w-[265px] sm:w-[100%] ${styles.list} ${
                isSortOpen ? styles.active : ""
              }`}
              id="sort_block"
              ref={sortListRef}
              style={{
                maxHeight: isSortOpen ? `${sortListHeight}px` : "0px",
              }}
            >
              {/* <li
                className={sortOrder === "" ? styles.active : ""} // Default "All" is active when sortOrder is ""
                onClick={() => handleSortClick("all")} // Changed "none" to "all"
              >
                All
              </li> */}
              <li
                className={sortOrder === "asc" ? styles.active : ""}
                onClick={() => handleSortClick("asc")}
              >
                Ascending
              </li>
              <li
                className={sortOrder === "desc" ? styles.active : ""}
                onClick={() => handleSortClick("desc")}
              >
                Descending
              </li>
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
                selectedYears.size > 0 ||
                selectedTopics.size > 0 ||
                selectedSolutions.size > 0 ||
                selectedProducts.size > 0 ||
                selectedTypes.size > 0
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
              {Array.from(selectedSolutions).map((solution) => (
                <span
                  key={solution}
                  className={`${styles.FilterBadge}`}
                  onClick={() => handleBadgeRemove("solution", solution)}
                >
                  {solution}
                </span>
              ))}
              {Array.from(selectedProducts).map((product) => (
                <span
                  key={product}
                  className={`${styles.FilterBadge}`}
                  onClick={() => handleBadgeRemove("product", product)}
                >
                  {product}
                </span>
              ))}
              {Array.from(selectedTypes).map((type) => (
                <span
                  key={type}
                  className={`${styles.FilterBadge}`}
                  onClick={() => handleBadgeRemove("type", type)}
                >
                  {type}
                </span>
              ))}
            </div>
            <div
              className={`clearBtn ${styles.clearBtn} ${
                selectedYears.size > 0 ||
                selectedTopics.size > 0 ||
                selectedSolutions.size > 0 ||
                selectedProducts.size > 0 ||
                selectedTypes.size > 0 ||
                searchText ||
                sortOrder
                  ? styles.active
                  : ""
              }`}
            >
              <h6
                className="text-[#fa198c] font-bold cursor-pointer"
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
                  className="Nolink absolute w-full h-full left-0 top-0 z-[1] text-[0]"
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
                      {item.year} | {item.topic} | {item.solution} |{" "}
                      {item.product} | {item.type}
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

export default BlogFilter;
