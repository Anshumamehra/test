import HeroBanner from "@/components/HeroBanner";

import Footer from "@/components/Footer";
import ResourceFilter from "@/components/ResourceFilter";
import ChatGemini from "@/components/ChatGemini";
export default function Contact() {
  const overlay = true;
  const heroBannerData = {
    heading: "Welcome! Anshuma",
    title: "Contact Us",
    styles: "!h-full",
    src: "/images/Clear-Outline-C-Inisghts.jpg",
    alt: "Nature",
    video: false,
  };
  return (
    <div>
      <HeroBanner overlay={overlay} heroBannerData={heroBannerData} />
      <ChatGemini />
      <ResourceFilter />
      <Footer />
    </div>
  );
}
``;
