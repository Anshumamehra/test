import HeroBanner from "@/components/HeroBanner";
import Footer from "@/components/Footer";
import Detail from "@/components/Detail";
import ChatBot from "@/components/ChatBot";
import ChatGemini from "@/components/ChatGemini";

export default function Solution() {
  const overlay = true;
  const heroBannerData = {
    heading: "Welcome! We are Clear Digital",
    title: "Solution",
    src: "/images/Latest-Brand-featured.jpg",
    alt: "Working Paper",
    video: false,
  };
  return (
    <div>
      <HeroBanner overlay={overlay} heroBannerData={heroBannerData} />
      {/* <ChatBot /> */}
      {/* <ChatGemini /> */}
      <Detail />
      <Footer />
    </div>
  );
}
