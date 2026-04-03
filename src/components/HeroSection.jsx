'use client';
import React, { useState, useEffect, useRef } from "react";
import { gsap } from 'gsap'

const StarIcon = ({ color = '#ff6a0c', size = 15 }) =>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width={size} height={size} style={{ fill: color, flexShrink: 0 }}>
    <g weight="fill">
      <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z" />
    </g>
  </svg>;

const bgImages = [
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
];

const categories = [
{
  label: 'Main Course',
  image: 'https://framerusercontent.com/images/6Z5dm64gLjAXX2kT0sBwSNl91U.png',
  icon: 'https://framerusercontent.com/images/x0b16PaKGOJeXikFeyv8xxLdiE.svg'
},
{
  label: 'Desserts',
  image: 'https://framerusercontent.com/images/DitzuDuV08H49Lr8DOxOEgNRqw.png',
  icon: 'https://framerusercontent.com/images/7s0RWMcypw0s9tN0C8iw9rzc.svg'
},
{
  label: 'Appetizer',
  image: 'https://framerusercontent.com/images/3zRNFsr5NrgeA7yATXqAZyREI8.png',
  icon: 'https://framerusercontent.com/images/rwz8VG1InI70hcK2pTSHZfDYQ.svg'
},
{
  label: 'Starter',
  image: 'https://framerusercontent.com/images/9JpOPNBpPpIm1OZt6KUEbjzRP0.png',
  icon: 'https://framerusercontent.com/images/HAaGMd1WUh6uFcaSbZnpeUfF6Y.svg'
}];


export default function HeroSection() {
  const [current, setCurrent] = useState(0);
   const sectionRef = useRef();

  useEffect(() => {

    const ctx = gsap.context(() => {
    gsap.set(".hero-bg", { force3D: true });

    gsap.to(".hero-bg", {
      scale: 1.1,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-bg",
        start: "top top",
        end: "bottom top",
        scrub: 0.5,
      }
    });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bgImages.length);
    }, 4000); // change every 4s

    return () => clearInterval(interval);
  }, []);

  return (
    <header
    ref={sectionRef}
      className="relative w-full flex flex-col items-center justify-center overflow-hidden"
      style={{
        minHeight: "100vh",
        paddingTop: "115px",
        paddingBottom: "58px",
      }}
    >
      
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {bgImages.map((img, index) => (
          <div
            key={index}
            className="hero-bg absolute inset-0 transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: current === index ? 1 : 0,
            }}
          />
        ))}

        {/* Dark overlay for readability */}
        <div
          className="absolute inset-0"
          style={{
            background: "rgba(0,0,0,0.5)",
          }}
        />
      </div>

      {/* Background gradient blobs */}
      {/* <div
        className="absolute bottom-[-325px] right-[-550px] rounded-full pointer-events-none"
        style={{
          width: '900px',
          height: '900px',
          background: 'linear-gradient(90deg, #ff6a0c 0%, rgba(255,106,12,0.07) 51%, transparent 100%)',
          filter: 'blur(25px)',
          opacity: 0.08,
          zIndex: 1
        }} />
      
      <div
        className="absolute bottom-[-325px] left-[-550px] rounded-full pointer-events-none"
        style={{
          width: '900px',
          height: '900px',
          background: 'linear-gradient(270deg, #ff6a0c 0%, rgba(255,106,12,0.07) 51%, transparent 100%)',
          filter: 'blur(25px)',
          opacity: 0.08,
          zIndex: 1
        }} /> */}
      

      <div className="relative z-10 w-full max-w-[1200px] px-[25px] flex flex-col items-center gap-[95px]">
        {/* Main content */}
        <div className="flex flex-col items-center gap-[24px] w-full max-w-[575px]">
          {/* Section tag */}
          <div className="flex flex-col items-center gap-[20px] w-full overflow-hidden">
            <div className="flex flex-col items-center gap-[22px] w-full overflow-hidden">
              <span className="section-tag" style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 'clamp(12px, 5vw, 4px)',
                  fontWeight: 600,
                  letterSpacing: "0.10em",
                  lineHeight: '1.05em',
                  margin: 0
                }}>Premium restaurant template</span>
                <h1 className="text-center w-full text-[clamp(30px,6vw,72px)] font-light tracking-[-0.07em] leading-[1.15] text-[#f5f0f0]" style={{fontFamily: 'Averia Serif Libre, serif'}} >
                  Where every meal is a chef masterpiece
                </h1>
            </div>
            <p
              className="text-center w-full max-w-[370px]"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                fontWeight: 400,
                letterSpacing: '-0.01em',
                lineHeight: '1.7em',
                color: '#dfdfdf'
              }}>
              
              We bring you the finest flavors, carefully crafted with the freshest ingredients &amp; every meal
            </p>
          </div>

          {/* CTA + Rating */}
          <div className="flex flex-row items-center justify-center gap-5 w-full flex-wrap">
            <a href="#reservation" className="btn-primary">
              Book a table
            </a>
            <div className="flex flex-row items-center gap-2">
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: 500,
                  letterSpacing: '-0.04em',
                  color: '#f0e9e9'
                }}>
                
                (4.9/5)
              </span>
              <div className="flex flex-row items-center gap-0">
                {[1, 2, 3, 4, 5].map((i) =>
                <StarIcon key={i} color="#ff6a0c" size={15} />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[25px] w-full">
          {categories.map((cat, idx) => (
            <div
              key={cat.label}
              className={`flex flex-col items-center gap-[22px] ${
                idx % 2 === 0 ? 'lg:pt-[50px]' : 'lg:pb-[50px]'
              }`}
            >
              <a
                href="#menu"
                className="flex flex-col items-center gap-[22px] no-underline w-full"
              >
                <div
                  className="relative w-full max-w-[165px]"
                  style={{
                    height: '238px',
                    borderRadius: '100px',
                    boxShadow: 'rgba(0, 0, 0, 0.18) 0px 2px 28px 0px'
                  }}
                >
                  {/* IMAGE */}
                  <div className="absolute inset-0 overflow-hidden rounded-[100px]">
                    <img
                      src={cat.image}
                      alt={cat.label}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* ICON */}
                  <div
                    className="absolute top-[5px] right-[3px] flex items-center justify-center"
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '1000px',
                      backgroundColor: '#ff6a0c',
                      boxShadow: 'rgba(255, 106, 13, 0.25) 0px 3px 10px 0px'
                    }}
                  >
                    <div className="w-[18px] h-[18px]">
                      <img src={cat.icon} alt="" className="w-full h-full object-contain" />
                    </div>
                  </div>
                </div>

                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '18px',
                    fontWeight: 400,
                    letterSpacing: '-0.05em',
                    lineHeight: '1.55em',
                    color: '#e7e7e7',
                    margin: 0,
                    textAlign: 'center'
                  }}
                >
                  {cat.label}
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </header>);

}