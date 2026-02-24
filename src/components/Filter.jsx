import Image from "next/image";
import { useState } from "react";

export default function Footer() {
  const [filter, setFilter] = useState("all");
  const [isOpen, setIsOpen] = useState(false);

  const filterData = [
    {
      image: "/images/africa.jpg",
      name: "ABCD",
      course: "Frontend Developer",
    },
    {
      image: "/images/hello.jpg",
      name: "ABCD",
      course: "Backend Developer",
    },
    {
      image: "/images/laptop-working.jpg",
      name: "ABCD",
      course: "FullStack Developer",
    },
    {
      image: "/images/working.jpg",
      name: "ABCD",
      course: "Java Developer",
    },
    {
        image: "/images/hello.jpg",
        name: "ABCD",
        course: "Backend Developer",
      },
      {
        image: "/images/laptop-working.jpg",
        name: "ABCD",
        course: "FullStack Developer",
      },
      {
        image: "/images/working.jpg",
        name: "ABCD",
        course: "Java Developer",
      },
      {
        image: "/images/hello.jpg",
        name: "ABCD",
        course: "Backend Developer",
      },
      {
        image: "/images/laptop-working.jpg",
        name: "ABCD",
        course: "FullStack Developer",
      },
      {
        image: "/images/working.jpg",
        name: "ABCD",
        course: "Java Developer",
      },
  ];

  // Filter logic
  const filteredItems =
    filter === "all"
      ? filterData
      : filterData.filter((item) =>
          item.course.toLowerCase().includes(filter)
        );

  return (
    <section className="Filter">
      <div className="container">
        <h2>Our team.</h2>

        <div className="Wrap mt-10">
            <div className="flex flex-wrap">
          <h3>Filter By</h3>

          <div className="relative inline-block ml-8">
            {/* Dropdown Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-between w-[200px] px-4 py-2 bg-purple-600 text-white rounded-lg"
            >
              {filter === "all"
                ? "All"
                : filter.charAt(0).toUpperCase() + filter.slice(1)}
              <span className="ml-2">▼</span>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <ul className="absolute left-0 mt-2 w-[200px] bg-purple-600 shadow-lg rounded-lg overflow-hidden z-10">
                <li
                  onClick={() => {
                    setFilter("all");
                    setIsOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-200 hover:text-black cursor-pointer"
                >
                  All
                </li>
                <li
                  onClick={() => {
                    setFilter("frontend");
                    setIsOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-200 hover:text-black cursor-pointer"
                >
                  Frontend Developer
                </li>
                <li
                  onClick={() => {
                    setFilter("backend");
                    setIsOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-200 hover:text-black cursor-pointer"
                >
                  Backend Developer
                </li>
                <li
                  onClick={() => {
                    setFilter("fullstack");
                    setIsOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-200 hover:text-black cursor-pointer"
                >
                  FullStack Developer
                </li>
                <li
                  onClick={() => {
                    setFilter("java");
                    setIsOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-200 hover:text-black cursor-pointer"
                >
                  Java Developer
                </li>
              </ul>
            )}
          </div>
          </div>

          {/* Cards */}
          <div className="outerWrap mt-[50px] flex flex-wrap w-[calc(100%+20px)] ml-[-10px] md:block md:w-full md:mx-0 items-center text-center">
            {filteredItems.map((data, index) => (
              <div
                key={index}
                className="relative Items group cursor-pointer mb-[20px] w-[calc(33.33%-20px)] mx-[10px] tablet:w-[calc(50%-20px)] md:w-full md:mx-0"
              >
                <div className="bg-[#5e0f50] rounded-3xl overflow-hidden hover:bg-[#e876d7] transition-all duration-300">
                  <div className="p-10 text-center">
                    <div className="w-[250px] h-[250px] sm:w-[150px] sm:h-[150px] mx-auto rounded-full border-4 border-[#7337d4] group-hover:border-[#c4c100] transition-all overflow-hidden">
                      <Image
                        src={data.image}
                        alt={data.name}
                        width={500}
                        height={500}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h5>{data.name}</h5>
                    <p>{data.course}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}