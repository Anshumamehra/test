export default function IntroBlock() {
  return (
    <section className="IntroBlock bg-black">
      <div className="container">
        <div className="introWrap text-center">
          <h3 className="text-white capitalize">
            Big ideas and bold thinking.
          </h3>
          <p className="pt-[15px] text-white">
            We have insights and expertise to share. See what’s happening in the
            industry.
          </p>
          <div className="btnWrap mt-[20px]">
            <a
              href="#"
              class="pink-btn link-white text-white"
              data-cursor-expand=""
            >
              View all case studies
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
