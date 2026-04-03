'use client';
import React from 'react';
import { useEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function StatsSection() {
  const img1 = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);
  const img4 = useRef(null);
  const headTitle = useRef(null);
  const sectionRef = useRef(null);

  const stats = [
    { value: '10', suffix: 'K+', label: 'Creative experience' },
    { value: '982', suffix: '+', label: 'Events created' },
    { value: '481', suffix: 'K+', label: 'Customer Reviews' },
    { value: '0', suffix: '+', label: 'Years experience' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
  const images = [img1.current, img2.current, img3.current, img4.current];

  // INITIAL POSITIONS OFFSCREEN + ROTATION for rolling effect
  gsap.set(img1.current, { x: -150, opacity: 0, rotation: -45 });
  gsap.set(img2.current, { x: 150, opacity: 0, rotation: 45 });
  gsap.set(img3.current, { x: -150, opacity: 0, rotation: -45 });
  gsap.set(img4.current, { x: 150, opacity: 0, rotation: 45 });

  gsap.fromTo(
    headTitle.current,
    { y: -150, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
        end: "top 20%",
        scrub: 1.2,
      }
    }
  );

  // SINGLE SCROLL-LINKED TIMELINE
  gsap.to(images, {
    x: 0,
    y: 0,
    rotation: 0,       // roll to normal
    opacity: 1, 
    ease: "power3.out",
    stagger: {
      each: 0.2, // img1+img2 first, then img3+img4 slightly after
    },
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top center",   // start when section top reaches center
      end: "center center",  // end when section center reaches center
      scrub: 1.2,          // smooth scroll-linked animation
    }
  });

  // Floating animation stays untouched
  gsap.to(img1.current, {
    y: "+=10",
    repeat: -1,
    yoyo: true,
    duration: 2,
    ease: "sine.inOut"
  });

  gsap.to(img2.current, {
    y: "-=10",
    repeat: -1,
    yoyo: true,
    duration: 2.2,
    ease: "sine.inOut"
  });

  gsap.to(img3.current, {
    y: "+=12",
    repeat: -1,
    yoyo: true,
    duration: 2.4,
    ease: "sine.inOut"
  });

  gsap.to(img4.current, {
    y: "-=12",
    repeat: -1,
    yoyo: true,
    duration: 2.1,
    ease: "sine.inOut"
  });
   }, sectionRef);

   return () => ctx.revert();

}, []);

  return (
    <section className="w-full flex flex-col items-center py-16 md:py-24" ref={sectionRef}>
      <div className="w-full max-w-[1200px] px-4 md:px-6 flex flex-col items-center gap-12 md:gap-20">

        {/* MAIN NUMBER */}
        <div ref={headTitle} className="flex flex-col items-center gap-4 text-center max-w-[900px]">
          <span
            style={{
              fontFamily: 'Averia Serif Libre, serif',
              fontSize: 'clamp(50px, 10vw, 130px)',
              fontWeight: 400,
              letterSpacing: '-3px',
              lineHeight: 1,
            }}
          >
            79,950+
          </span>

          <span className="section-tag">
            Meals served for everyone
          </span>
        </div>

        {/* STATS */}
        <div className="relative w-full">

          {/* DECORATIVE IMAGES (only desktop) */}
          <div className="hidden lg:block">
            <img ref={img1}
              src="https://framerusercontent.com/images/9WioaK9UfEVwMVVtAKwdAC9GqNY.png"
              className="absolute w-[100px] h-[100px] top-[-80px] left-[120px] rounded-full shadow-lg object-cover"
            />
            <img ref={img2}
              src="https://framerusercontent.com/images/ruyonYU8IiQ7pO1I91CvzyJbU.png"
              className="absolute w-[100px] h-[100px] top-[-80px] right-[120px] rounded-full shadow-lg object-cover"
            />
            <img ref={img3}
              src="https://framerusercontent.com/images/JSx36aU4D1axYA2MwD5gNuZUfs.png"
              className="absolute w-[110px] h-[110px] top-[100px] left-[20px] rounded-full shadow-lg object-cover"
            />
            <img ref={img4}
              src="https://framerusercontent.com/images/2M3c78DnavMJXuev7IQWfaky5o.png"
              className="absolute w-[110px] h-[110px] top-[100px] right-[20px] rounded-full shadow-lg object-cover"
            />
          </div>

          {/* GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">

            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center gap-2">

                <span className="text-[28px] md:text-[44px] tracking-tight">
                  {stat.value}{stat.suffix}
                </span>

                <p className="text-[13px] md:text-[16px] text-[#717171]">
                  {stat.label}
                </p>

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}
