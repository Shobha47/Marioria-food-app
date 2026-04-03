'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import CircularText from '../components/ui/CircularText';

export default function AboutSection() {
  const abtImage = useRef();
  const sectionRef = useRef();

  useEffect(() => {
  const ctx = gsap.context(() => {

    gsap.fromTo(
      abtImage.current,
      { xPercent: -20, opacity: 0.6, rotation: -15 },
      {
        xPercent: 0,
        opacity: 1,
        rotation: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "top 20%",
          scrub: true,
        }
      }
    );

  }, sectionRef);

  return () => ctx.revert();
}, []);

  return (
    <section id="about" className="w-full flex flex-col items-center py-10 md:py-14">
  <div ref={sectionRef} className="w-full max-w-[1200px] px-4 md:px-6 flex flex-col gap-12 md:gap-16">

    {/* TOP GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

      {/* IMAGE */}
      <div ref={abtImage}
        className="relative overflow-hidden w-full h-[320px] sm:h-[350px] md:h-[385px] lg:h-[485px]"
        style={{
          backgroundImage: "url('/images/dish/dish5.png')",
          backgroundSize: 'cover',
          objectFit: "contain",
          backgroundPosition: 'center',
        }}
      />

      {/* CONTENT */}
      <div className="flex flex-col justify-center gap-6 md:gap-10">

        <div className="flex flex-col gap-4 md:gap-5 max-w-[465px]">

          {/* TAG */}
          <div className="flex items-center gap-2 pb-2">
            <img src="https://framerusercontent.com/images/Up5U4ivxZgKfgZkHZ8lfXpuJmA.png" className="w-[14px] md:w-[22px]" />
            
            <p className="text-[14px] md:text-[16px] tracking-tight" style={{"font-family": "Aboreto",}} >
              Best Dining Experience
            </p>

            <img src="https://framerusercontent.com/images/l9p7LbxLLE1cvygIniGBpndz9k.png" className="w-[18px] md:w-[22px]" />
          </div>

          {/* HEADING */}
          <h2
            style={{
              fontFamily: 'Averia Serif Libre, serif',
              fontSize: 'clamp(28px, 5vw, 52px)',
              fontWeight: 300,
              letterSpacing: '-0.07em',
              lineHeight: '1.15em',
              margin: 0
            }}
          >
            Best dining experience with every dish
          </h2>

          {/* TEXT */}
          <p className="text-[15px] md:text-[18px] text-[#717171] max-w-[400px] leading-relaxed">
            We believe dining is more than just a meal; it's an experience. Our chefs create dishes that combine the freshest ingredients
          </p>
        </div>

        {/* LOCATION + CIRCLE */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">

          {/* LOCATION CARD */}
          <a
            href="#"
            className="location-card w-full sm:w-auto max-w-[265px]"
          >
            <div className="flex gap-4 items-center">

              <img
                src="https://framerusercontent.com/images/gJ3MI4Fk7j2Msu1UZXymlBNj6E.jpg"
                className="w-[56px] h-[56px] md:w-[64px] md:h-[64px] rounded-[14px] object-cover"
              />

              <div>
                <p className="text-white text-sm md:text-base">
                  Marioria Restaurant, LA
                </p>

                <span className="text-white text-xs opacity-80">
                  View on Map
                </span>
              </div>

            </div>
          </a>

          {/* CIRCULAR TEXT */}
          <div className="self-center sm:self-auto scale-75 md:scale-100">
            <CircularText
              text="EAT*BITS*MARIORIA*"
              onHover="speedUp"
              spinDuration={20}
            />
          </div>

        </div>
      </div>
    </div>

    {/* WHY US */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {[
        { num: '01', title: 'Authentic Flavors', desc: 'We take pride in offering an array of dishes made with love & quality' },
        { num: '02', title: 'Cozy Ambiance', desc: 'Our restaurant provides the perfect setting to enjoy your food' },
        { num: '03', title: 'Exceptional Service', desc: 'Our team is dedicated to making your dining experience smooth' },
        
      ].map((item) => (
        <div key={item.num} className="why-us-card mx-auto text-center">

          <h1 className="text-[40px] md:text-[60px] font-serif">
            {item.num}
          </h1>

          <div className="flex flex-col items-center gap-2">
            <h6 className="text-[18px] md:text-[24px] font-serif">
              {item.title}
            </h6>

            <p className="text-[14px] md:text-[16px] text-[#717171]">
              {item.desc}
            </p>
          </div>

        </div>
      ))}
    </div>

  </div>
</section>
  );

}