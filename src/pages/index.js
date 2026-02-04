// import Header from "@/components/Header";
import ColThreeCard from "@/components/ColThreeCard";
import HeroBanner from "@/components/HeroBanner";
import ImageWithContent from "@/components/ImageWithContent";
import IntroBlock from "@/components/IntroBlock";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import CaseStudies from "@/components/CaseStudies";
import TabsSection from "@/components/TabsSection";
export default function Home() {
  const overlay = true;
  const heroBannerData = {
    heading: "Anshu Mehra",
    title: "Anshu & Co Digital Solutions",
    src: "/images/Clear-Digital-Home-Hero_400kbps.mp4",
    video: true,
  };
  return (
    <div>
      <HeroBanner overlay={overlay} heroBannerData={heroBannerData} />
      <TabsSection />
      <ColThreeCard />
      <ImageWithContent />
      <IntroBlock />
      <CaseStudies />
      <Cta />
      <Footer />
    </div>
  );
}
