import Image from 'next/image'
import styles from "@/styles/Gallary.module.css";

import { useState } from "react";

export default function Gallery() {
    const [activeItem, setActiveItem] = useState(null);
    const [filter, setFilter] = useState("all");
    
    

    const GalleryData = [
        {
          image: "/images/boy-dog.png",
          altText: "boy dog",
          type: "image",
        },
        {
          image: "/images/Clear-Outline-C-Inisghts.jpg",
          altText: "outline",
          type: "image",
        },
        {
          image: "/images/studio-mixing.png",
          altText: "home hero video",
          type: "image",
        },
        {
            image: "/images/Clear-Outline-C-Inisghts.webp",
            altText: "home hero video",
            type: "image",
          },
          {
            image: "/images/women.png",
            altText: "home hero video",
            type: "image",
          },
          {
            video: "/images/Clear-Digital-Home-Hero_400kbps.mp4",
            altText: "home hero video",
            type: "video",
          },
          {
            image: "/images/china.png",
            altText: "home hero video",
            type: "image",
          },
          {
            image: "/images/DSC00314-2.jpg",
            altText: "home hero video",
            type: "image",
          },
          {
            iframe: "https://youtu.be/yBDKLX7EQAI?si=kdY_FQkwt1ge_Huf",
            altText: "home hero video",
            type: "iframe",
          },
      ];
      const filteredGallery = GalleryData.filter((item) => {
        if (filter === "all") return true;
        return item.type === filter;
      });
return(
    <>
<section className="Gallary">
    <div className="container">
        <h2 className='text-center'>Gallery</h2>
        <div className="wrapper">
          <div className='max-w-md mx-auto'>
            <div className="relative my-6">
                <input type="text" placeholder="Search" className="w-full px-6 py-4 pr-12 bg-gray-900 text-white rounded-full outline-none focus:ring-2 focus:ring-pink-600 transition placeholder-gray-500" />
            </div>
            </div>
            <div className="btnWrap flex justify-center gap-6 mb-10 flex-wrap mt-[20px]">
              <button
                onClick={() => setFilter("all")}
                className={`pink-btn link-white text-white rounded-xl overflow-hidden ${
                  filter === "all" ? "opacity-100" : "opacity-60"
                }`}
              >
                All
              </button>

              <button
                onClick={() => setFilter("image")}
                className={`pink-btn link-white text-white rounded-xl overflow-hidden ${
                  filter === "image" ? "opacity-100" : "opacity-60"
                }`}
              >
                Photos
              </button>

              <button
                onClick={() => setFilter("video")}
                className={`pink-btn link-white text-white rounded-xl overflow-hidden ${
                  filter === "video" ? "opacity-100" : "opacity-60"
                }`}
              >
                Videos
              </button>
            </div>
           <div className={`outerwrap flex flex-wrap w-[calc(100%+20px)] mt-14`}>
                {filteredGallery.map((data, index) =>
                    <div key={index} className={`item w-[calc(33.33%-20px)] mx-[10px] mb-3 lg:w-[calc(50%-20px)] ${styles.item}`}
                    onClick={() => setActiveItem(data)}>
                        <div className="ImgWrap overflow-hidden h-[350px] md:h-[300px] rounded-lg shadow-md relative">
                        {data.type === "image" && (
                                <Image
                                src={data.image}
                                alt={data.altText}
                                width={500}
                                height={500}
                                className="object-cover w-full h-full"
                                />
                            )}

                            {data.type === "video" && (
                                <video
                                src={data.video}
                                controls
                                className="w-full h-full object-cover"
                                />
                            )}
                            {data.type === "iframe" && (
                                <iframe
                                src={data.iframe}
                                controls
                                className="w-full h-full object-cover"
                                />
                            )}

                        </div>
                    </div>
                )}
           </div>
        </div>
    </div>
</section>

 {/* OVERLAY */}
 {activeItem && (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      onClick={() => setActiveItem(null)}
    >
      <div
        className="relative max-w-4xl w-full px-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute -top-10 right-0 text-white text-3xl"
          onClick={() => setActiveItem(null)}
        >
          ✕
        </button>

        {activeItem.type === "image" && (
          <Image
            src={activeItem.image}
            alt={activeItem.altText}
            width={1000}
            height={700}
            className="w-full h-auto rounded-lg"
          />
        )}

        {activeItem.type === "video" && (
          <video
            src={activeItem.video}
            controls
            autoPlay
            className="w-full rounded-lg"
          />
        )}
      </div>
    </div>
  )}
</>
);
}
