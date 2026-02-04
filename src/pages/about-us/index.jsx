import HeroBanner from "@/components/HeroBanner";
import IntroBlock from "@/components/IntroBlock";
import Footer from "@/components/Footer";
import ImageSlide from "@/components/ImageSlider";
import Cta from "@/components/Cta";
import Accordion from "@/components/Accordion";
import Counter from "@/components/Counter";
export default function AboutUs() {
  const overlay = true;
  const heroBannerData = {
    heading: "Welcomes! We are Clear Digital",
    title: "About Us",
    src: "/images/work-paper.jpg",
    alt: "Working Paper",
    video: false,
  };
  return (
    <div className="body">
      <HeroBanner overlay={overlay} heroBannerData={heroBannerData} />
      <IntroBlock />
      <ImageSlide />
      <Counter />
      <Accordion />
      <Cta />
      <Footer />
    </div>
  );
}
