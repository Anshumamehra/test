"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/styles/Accordion.module.css";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const panelRefs = useRef([]);

  const accordionData = [
    {
      title: "What is Next.js?",
      blurb: [
        "Next.js is a React Framework that makes Server-Side Rendering (SSR), Static Site Generation (SSG), and Client-Side Rendering (CSR) easy. It provides SEO-friendly, fast performance, and full-stack capabilities.",
      ],
    },
    {
      title: "How to Install Next.js?",
      blurb: [
        "You can install Next.js using npm, yarn, or pnpm.",
        "npx create-next-app@latest my-next-app",
        "# OR",
        "yarn create next-app my-next-app",
        "# OR",
        "yarn create next-app my-next-app",
      ],
    },
    {
      title: " How to Fetch Data in Next.js?",
      blurb: [
        "There are three ways to fetch data in Next.js:",
        "getStaticProps (SSG)",
        "getServerSideProps (SSR)",
        "Client-Side Fetching (CSR) using useEffect",
      ],
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section className={`Accordion bg-black`}>
      <div className="container">
        <h3 className={`heading capitalize text-white text-center`}>
          Frequently Asked Questions (FAQs) About Next.js
        </h3>
        <div className={`rowOuter mt-[70px]`}>
          {accordionData.map((item, index) => (
            <div
              key={index}
              className={`accordionItem mb-[50px] pb-[40px] border-b-2 border-white  ${
                styles.accordionItem
              } ${index === accordionData.length - 1 ? styles.noBorder : ""}`}
            >
              <h3
                onClick={() => toggleAccordion(index)}
                className={`title cursor-pointer capitalize relative text-white pr-[30px] ${
                  styles.title
                } ${activeIndex === index ? styles.active : ""}`}
              >
                {item.title}
                <span className={`arrow ${styles.arrow} `} />
              </h3>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    key={`panel-${index}`}
                    className={`panel overflow-hidden ${styles.panel}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: panelRefs.current[index]?.scrollHeight || "auto",
                      opacity: 1,
                    }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    ref={(el) => (panelRefs.current[index] = el)}
                    layout
                  >
                    <div className={`bodyWrap ${styles.bodyWrap}`}>
                      {item.blurb.map((list, i) => (
                        <p className="text-white" key={i}>
                          {list}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accordion;
