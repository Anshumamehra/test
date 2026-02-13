"use client";
import { useEffect, useState } from "react";

export default function WelcomeIntro() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true); 
    }, 5600);

    return () => clearTimeout(timer);
  }, []);

  if (hide) return null;

  return (
    <section className="WelcomeIntro">
      <div className="WelcomePanel left"></div>
      <div className="WelcomePanel right"></div>

      <div className="WelcomeContent">
        <h1 className="WelcomeTitle">WELCOME</h1>

  
        <p className="Welcomename">Anshuma Mehra</p>

        <span className="line"></span>

        <p className="role">Senior Front-End Developer</p>

        <p className="tagline">Crafting Modern Web Experiences</p>
      </div>
    </section>
  );
}