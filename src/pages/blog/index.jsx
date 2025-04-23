import HeroBanner from "@/components/HeroBanner";
export default function blog() {
  const overlay = true;
  const heroBannerData = {
    heading: "Welcome! We are Clear Digital",
    title: "blog",
    src: "images/Default-Case-Study-Card.png",
    alt: "Working Paper",
    video: false,
  };
  return (
    <div className="body">
      <HeroBanner overlay={overlay} heroBannerData={heroBannerData} />
    </div>
  );
}