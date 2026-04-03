'use client';
import React from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const features = [
{
  icon: 'https://framerusercontent.com/images/g8lWcNvdGR3PNauuXSyowdo.svg',
  title: 'Fresh Ingredients',
  desc: 'Only the freshest ingredients are used in our dishes daily'
},
{
  icon: 'https://framerusercontent.com/images/67bbw9lI8egMf0749n5TklBE.svg',
  title: 'Creative Plating',
  desc: 'Every meal is beautifully plated, showcasing our culinary art'
},
{
  icon: 'https://framerusercontent.com/images/wuRZX8MnPIHPMMq4tZpTKbnBk.svg',
  title: 'Artisan Recipes',
  desc: 'Each dish is made with our unique, handcrafted artisan recipes'
},
{
  icon: 'https://framerusercontent.com/images/JYK75ywfH2sXl54egC7SJYLatFc.svg',
  title: 'Locally Sourced',
  desc: 'We work with local farmers to bring the best ingredients'
},
{
  icon: 'https://framerusercontent.com/images/Y4HVoNWoL4y5swcIvYUp9cDT3ZA.svg',
  title: 'Sustainable Practices',
  desc: 'We focus on reducing food waste while supporting sustainability'
},
{
  icon: 'https://framerusercontent.com/images/TnrCWJxWhJRxBNcCH2CEGNPWE.svg',
  title: 'Exceptional Service',
  desc: 'Delivering personalized service for an unforgettable dining experience'
}];


export default function WhyChooseSection() {
  const whyChooseUsImg = useRef();
  const sectionRef = useRef();

  useEffect(() => {

   const ctx = gsap.context(() => {

    gsap.fromTo(
      whyChooseUsImg.current,
      { x: 250, opacity: 0.5, rotate: 45 }, // 👈 visible but offset
      {
        x: 0,
        opacity: 1,
        rotate: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end: "top 40%",
          scrub: 1.2,
        }
      }
    );

  }, sectionRef);

  return () => ctx.revert();

  }, [])

  return (
    <section className="w-full flex flex-col items-center py-12 md:py-16">
      <div ref={sectionRef} className="w-full max-w-[1200px] px-4 md:px-6 flex flex-col items-center gap-12 md:gap-16">

        {/* HEADING */}
        <div className="flex flex-col items-center gap-4 max-w-[520px] text-center">
          <span className="section-tag">Discover what makes us special</span>

          <h2
            style={{
              fontFamily: 'Averia Serif Libre, serif',
              fontSize: 'clamp(28px, 4vw, 52px)',
              fontWeight: 300,
              letterSpacing: '-0.07em',
              lineHeight: '1.15em',
              margin: 0
            }}
          >
            Why choose Marioria for your dining expertise
          </h2>
        </div>

        {/* MAIN GRID */}
        <div className="grid w-full grid-cols-1 lg:grid-cols-3 gap-8">

          {/* FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:col-span-2">

            {features.map((f) => (
              <div key={f.title} className="feature-card flex gap-4">

                {/* ICON */}
                <div className="w-[36px] h-[36px] flex items-center justify-center rounded-full bg-[#f5f5f5] flex-shrink-0">
                  <img src={f.icon} alt={f.title} className="w-[18px] h-[18px]" />
                </div>

                {/* TEXT */}
                <div className="flex flex-col gap-2">
                  <p className="text-[18px] md:text-[22px] font-medium">
                    {f.title}
                  </p>

                  <p className="text-[14px] md:text-[16px] text-[#717171] leading-relaxed">
                    {f.desc}
                  </p>
                </div>

              </div>
            ))}

          </div>

          {/* IMAGE */}
          <div ref={whyChooseUsImg} className="relative w-full h-[250px] sm:h-[350px] lg:h-full rounded-[25px] overflow-hidden">
            <img
              src="/images/dish/dish3.png"
              alt="Why choose us"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>);

}