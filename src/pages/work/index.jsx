import HeroBanner from "@/components/HeroBanner";

import Footer from "@/components/Footer";
import BlogFilter from "@/components/BlogFilter";
export default function work() {
  const overlay = true;
  const heroBannerData = {
    heading: "Welcome! We are Clear Digital",
    title: "Work",
    styles: "!h-full",
    src: "/images/Clear-White-C-Inisght.jpg",
    alt: "Nature",
    video: false,
  };
  return (
    <div>
      <HeroBanner overlay={overlay} heroBannerData={heroBannerData} />
      <BlogFilter />
      <Footer />
    </div>
  );
}
``;
