import HeroBanner from "@/components/HeroBanner";
import Tab from "@/components/Tab";
import ContentWithImageSlider from "@/components/ContentWithImageSlider";
import Footer from "@/components/Footer";

export default function Practice() {
const overlay = true;
const heroBannerData = {
    heading: "Welcome! We are Clear Digital",
    title: "We are Practicing here",
    src: "/images/work-paper.jpg",
    alt: "Working Paper",
    video: false,
  };
  return (
    <div className="body">
      <HeroBanner overlay={overlay} heroBannerData={heroBannerData} />
      <Tab />
      <ContentWithImageSlider />
      <Footer />
    </div>
  );
}