'use client';
import React from 'react';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StarIcon = ({ color = '#ff6a0c', size = 18 }) =>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width={size} height={size} style={{ fill: color, flexShrink: 0 }}>
    <g weight="fill">
      <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z" />
    </g>
  </svg>;

const bgImages = [
  "/images/interior/restaurant-interior3.jpg",
  "/images/interior/restaurant-interior2.jpg",
];

const openingTimes = [
{ day: 'Monday', time: 'Closed' },
{ day: 'Tuesday', time: '11 AM - 10 PM' },
{ day: 'Wednesday', time: '10AM – 08PM' },
{ day: 'Thursday', time: '10 AM - 11 PM' },
{ day: 'Friday', time: 'Closed' },
{ day: 'Saturday', time: '11 AM - 10 PM' },
{ day: 'Sunday', time: '12 AM - 9 PM' }];


const steps = [
{
  num: '(01)',
  title: 'Select your date & time',
  desc: "Choose the date that works best for your dining experience and let us know when you\'ll be joining us"
},
{
  num: '(02)',
  title: 'Confirm your reservation',
  desc: 'Provide your name, contact info, and number of guests to help us prepare for your arrival and everything'
},
{
  num: '(03)',
  title: 'Confirmation & preparation',
  desc: 'Review all your details carefully and confirm your booking with us for a seamless top dining experience'
}];


export default function ProcessSection() {
  const sectionRef = useRef();
  const imagesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      const imgs = imagesRef.current;

      // show first image initially
      gsap.set(imgs[0], { opacity: 1 });

      imgs.forEach((img, i) => {
        if (i === 0) return;

        gsap.to(img, {
          opacity: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: `${i * 50}% center`,
            end: `${(i + 1) * 30}% center`,
            scrub: 1.2,
          }
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="reservation" className="w-full flex flex-col items-center py-12 md:py-16">
      <div ref={sectionRef} className="w-full max-w-[1200px] px-4 md:px-6 flex flex-col gap-12 md:gap-20">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">

          {/* LEFT */}
          <div className="flex flex-col gap-10 md:gap-16">

            {/* TEXT */}
            <div className="flex flex-col gap-4 max-w-[500px]">
              <span className="section-tag">Simple reservation process</span>

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
                Reserve your table with just a few clicks
              </h2>
            </div>

            {/* TESTIMONIAL */}
            <div className="flex flex-col gap-6 max-w-[420px]">

              <div className="flex gap-1">
                {[1,2,3,4,5].map(i => (
                  <StarIcon key={i} size={16} />
                ))}
              </div>

              <p className="text-[16px] md:text-[20px] text-[#717171] leading-relaxed">
                An unforgettable dining experience! The food was amazing, & the service was crazy
              </p>

              <div className="flex items-center gap-3">
                <img
                  src="https://framerusercontent.com/images/p0M6COBs4yMOA7N8u7cW1B32yPE.webp"
                  className="w-[42px] h-[42px] md:w-[50px] md:h-[50px] rounded-full object-cover"
                />
                <p className="text-[16px] md:text-[22px] font-medium">
                  Sarah Johnson
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT - STEPS */}
          <div className="flex flex-col gap-10 md:gap-14">

            {steps.map((step) => (
              <div key={step.num} className="flex gap-4 md:gap-6">

                <p className="text-[#ff6a0c] text-[14px] md:text-[18px] flex-shrink-0">
                  {step.num}
                </p>

                <div className="flex flex-col gap-2 md:gap-4 max-w-[420px]">
                  <h5 className="text-[20px] md:text-[28px] font-serif">
                    {step.title}
                  </h5>

                  <p className="text-[14px] md:text-[16px] text-[#717171]">
                    {step.desc}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>

        {/* OPENING TIME SECTION */}
        <div className="relative w-full rounded-[20px] md:rounded-[28px] overflow-hidden">

          {/* BACKGROUND IMAGE */}
          {/* <img src="https://framerusercontent.com/images/2qrd7mgW022iN2qcCdKkbihSrI.png" className="absolute inset-0 w-full h-full object-cover" /> */}
          <div className="absolute inset-0">
            {bgImages.map((src, i) => (
              <img
                key={i}
                ref={(el) => (imagesRef.current[i] = el)} // 👈 IMPORTANT
                src={src}
                className="absolute inset-0 w-full h-full object-cover opacity-0"
              />
            ))}
          </div>

          {/* CONTENT */}
          <div className="relative z-10 flex flex-col md:flex-row justify-end p-6 md:p-10 min-h-[400px] md:min-h-[600px]">

            <div className="opening-time-card w-full md:max-w-[360px] flex flex-col gap-6 md:gap-8">

              <h4 className="text-[22px] md:text-[32px] font-serif">
                Opening time:
              </h4>

              <div className="flex flex-col gap-3">
                {openingTimes.map((item, idx) => (
                  <React.Fragment key={item.day}>
                    <div className="flex justify-between text-[14px] md:text-[18px] text-[#717171]">
                      <span>{item.day}</span>
                      <span>{item.time}</span>
                    </div>
                    {idx < openingTimes.length - 1 && (
                      <div className="h-[1px] bg-gray-300 opacity-40" />
                    )}
                  </React.Fragment>
                ))}
              </div>

              <a href="#reservation" className="btn-primary w-full text-center">
                Book a table
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>);

}