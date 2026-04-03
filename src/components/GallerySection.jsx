'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  { src: '/images/gallery/1.jpg' },
  { src: '/images/gallery/2.jpg' },
  { src: '/images/gallery/3.jpg' },
  { src: '/images/gallery/4.jpg' },
  { src: '/images/gallery/5.jpg' },
  { src: '/images/gallery/6.jpg' },
  { src: '/images/gallery/7.jpg' },
  { src: '/images/gallery/8.jpg' },
  { src: '/images/gallery/9.jpg' },
];

export default function GallerySection() {
  const sectionRef = useRef(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const row3Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Split images into 3 rows
      const row1Images = row1Ref.current.children;
      const row2Images = row2Ref.current.children;
      const row3Images = row3Ref.current.children;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2000", // adjust scroll length
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        }
      });

      // Row 1 (slow)
      timeline.to(row1Images, {
        y: -200,
        stagger: 0.2,
        ease: "none"
      });

      // Row 2 (medium)
      timeline.to(row2Images, {
        y: -350,
        stagger: 0.2,
        ease: "none"
      }, "<"); // "<" = start at same time

      // Row 3 (fast)
      timeline.to(row3Images, {
        y: -500,
        stagger: 0.2,
        ease: "none"
      }, "<");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Split gallery into 3 rows
  const rowImages = [
    galleryImages.slice(0, 3),
    galleryImages.slice(3, 6),
    galleryImages.slice(6, 9)
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full flex flex-col items-center py-20 overflow-hidden"
    >
      <div className="w-full max-w-[1200px] px-[25px] flex flex-col items-center gap-[42px]">

        {/* Heading */}
        <div className="flex flex-col items-center gap-[6px] max-w-[535px]">
          <span className="section-tag">Captured with care</span>
          <h2 className="text-center text-[clamp(34px,2vw,52px)] font-serif">
            Glimpse of our creation
          </h2>
          {/* <p className="text-center max-w-[400px] text-[#717171]">
            Take a look at our beautifully crafted memories
          </p> */}
        </div>

        {/* ROWS */}
        <div className="w-full flex flex-col border-2 h-[400px]"
        style={{
          backgroundImage: "url('/images/gallery/6.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        >

         {/* 🔥 CENTER TEXT */}
        <h1 style={{"font-family": "Sigmar One", fontWeight: 1000, letterSpacing: 20}}  className="absolute text-white text-4xl md:text-6xl font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-3">
          Taste It
        </h1>

          {/* Row 1 */}
          <div ref={row1Ref} className="flex overflow-hidden">
            {rowImages[0].map((img, i) => (
              <div key={i} className="flex-1 h-full overflow-hidden">
                <img src={img.src} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div ref={row2Ref} className="flex overflow-hidden">
            {rowImages[1].map((img, i) => (
              <div key={i} className="flex-1 h-full overflow-hidden">
                <img src={img.src} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Row 3 */}
          <div ref={row3Ref} className="flex overflow-hidden">
            {rowImages[2].map((img, i) => (
              <div key={i} className="flex-1 h-full overflow-hidden">
                <img src={img.src} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}