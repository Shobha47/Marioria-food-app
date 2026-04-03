'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const dishes = [
  '/images/dish/dish10.png',
  '/images/dish/dish11.png',
  '/images/dish/dish12.png',
  '/images/dish/dish13.png',
  '/images/dish/dish14.png',
  '/images/dish/dish15.png',
  '/images/dish/dish16.png',
];

export default function DishShowcase() {
  const sectionRef = useRef();
  const dishesRef = useRef([]);

  dishesRef.current = [];

  const addToRefs = (el) => {
    if (el && !dishesRef.current.includes(el)) {
      dishesRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {

      // hide all except first
      gsap.set(dishesRef.current, { opacity: 0, scale: 0.8 });
      gsap.set(dishesRef.current[0], { opacity: 1, scale: 1 });

      // timeline for scroll switching
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2000", // controls scroll length
          scrub: 1,
          pin: true,
        }
      });

      dishesRef.current.forEach((dish, i) => {
        if (i === 0) return;

        tl.to(dishesRef.current[i - 1], {
          opacity: 0,
          scale: 0.8,
          rotation: -10,
          duration: 1,
        });

        tl.fromTo(
          dish,
          { opacity: 0, scale: 1.2, rotation: 10 },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1,
          },
          "<"
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
  <section
  ref={sectionRef}
  className="w-full min-h-screen flex items-center justify-center bg-[#fafafa] relative overflow-hidden py-20"
>
  <div className="w-full max-w-[1200px] px-[25px] flex flex-col items-center gap-[64px]">

    {/* HEADING */}
    <div className="flex flex-col items-center gap-5 max-w-[520px] text-center">
      <span className="section-tag">Real taste, real authentication</span>

      <h2
        style={{
          fontFamily: 'Averia Serif Libre, serif',
          fontSize: 'clamp(34px, 4vw, 52px)',
          fontWeight: 300,
          letterSpacing: '-0.07em',
          lineHeight: '1.15em',
          color: '#1c1c1c',
          margin: 0
        }}
      >
        Our Legacy
      </h2>
    </div>

    {/* DISH AREA (CENTER CONTROL) */}
    <div className="relative flex items-center justify-center w-full max-w-[500px]">

      {/* FORK */}
        <img
        src="/images/dish/left-spoon.png"
        className="absolute -left-24 md:-left-36 h-[320px] md:h-[420px] object-contain"
        />

        {/* KNIFE */}
        <img
        src="/images/dish/right-spoon.png"
        className="absolute -right-24 md:-right-36 h-[320px] md:h-[420px] object-contain"
        />

      {/* DISH STACK */}
      <div className="relative w-[260px] md:w-[360px] aspect-square flex items-center justify-center">
        {dishes.map((src, i) => (
          <img
            key={i}
            ref={addToRefs}
            src={src}
            className="absolute w-full h-full object-contain"
          />
        ))}
      </div>

    </div>

  </div>
</section>
  );
}