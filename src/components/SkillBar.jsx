import styles from "@/styles/SkillBar.module.css";
import { useEffect, useRef, useState } from "react";

const bardata = {
  intro: {
    heading: "Technical Skills",
    para: "Code websites directly in the browser with W3Schools Spaces",
  },
  data: [
    { coursename: "Html", percent: "95%" },
    { coursename: "CSS", percent: "85%" },
    { coursename: "Javascript", percent: "25%" },
    { coursename: "Java", percent: "35%" },
    { coursename: "Python", percent: "45%" },
    { coursename: "C++", percent: "65%" },
  ],
};

const getColor = (percent) => {
  if (percent <= 40) return "#ff4d4d";
  if (percent <= 70) return "#ffa500";
  return "#4caf50";
};

const SkillBar = () => {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);   // animate when visible
        } else {
          setAnimate(false);  // reset when out of view
        }
      },
      { threshold: 0.3 }
    );
  
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  
    return () => observer.disconnect();
  }, []);
  

  return (
    <section className="SkillBar bg-white" ref={sectionRef}>
      <div className="container">
        <h2 className="text-center text-black">{bardata.intro.heading}</h2>
        <p className="text-center mt-6 text-black">{bardata.intro.para}</p>

        <div className="outerwrap bg-gray-500 p-5 rounded-lg mt-10">
          {bardata.data.map((data, index) => {
            const percentValue = parseInt(data.percent);

            return (
              <div
                key={index}
                className="item rounded-lg bg-black mb-4 last:mb-0 overflow-hidden"
              >
                <div
                  className={`${styles.innerwrap} p-2`}
                  style={{
                    width: animate ? data.percent : "0%",
                    backgroundColor: getColor(percentValue),
                  }}
                >
                  <span className="ml-4">{data.coursename}</span>
                  <span className="ml-4">{data.percent}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillBar;
