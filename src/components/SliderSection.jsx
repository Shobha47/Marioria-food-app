'use client';
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function FullPageSlider() {
  const sectionsRef = useRef([]);
  const imagesRef = useRef([]);
  const outerRef = useRef([]);
  const innerRef = useRef([]);
  const titlesRef = useRef([]);

  useEffect(() => {
  const ctx = gsap.context(() => {

    const sections = sectionsRef.current;
    const total = sections.length;

    // initial state
    gsap.set(sections, { autoAlpha: 0 });
    gsap.set(sections[0], { autoAlpha: 1 });

    gsap.set(outerRef.current, { yPercent: 100 });
    gsap.set(innerRef.current, { yPercent: -100 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sections[0].parentElement,
        start: "top top",
        end: `+=${total * 1000}`, // controls scroll length
        pin: true,
        anticipatePin: 1,

        // 👇 THIS MAKES IT SNAP LIKE ORIGINAL
        snap: {
          snapTo: 1 / (total - 1),
          duration: 0.4,
          ease: "power1.inOut"
        }
      }
    });

    sections.forEach((section, i) => {
      if (i === 0) return;

      const pos = i;

      // previous section OUT
      tl.to(imagesRef.current[i - 1], {
        yPercent: -15
      }, pos)
      .to(sections[i - 1], {
        autoAlpha: 0
      }, pos);

      // next section IN
      tl.set(section, { autoAlpha: 1 }, pos)
        .fromTo(
          [outerRef.current[i], innerRef.current[i]],
          {
            yPercent: (idx) => (idx ? -100 : 100)
          },
          { yPercent: 0 },
          pos
        )
        .fromTo(
          imagesRef.current[i],
          { yPercent: 15 },
          { yPercent: 0 },
          pos
        )
        .fromTo(
          titlesRef.current[i],
          { autoAlpha: 0, yPercent: 150 },
          {
            autoAlpha: 1,
            yPercent: 0,
            duration: 1,
            ease: "power2"
          },
          pos + 0.2
        );
    });

  });

  return () => ctx.revert();
}, []);

  const data = [
    {
      title: "City Skyline",
      img: "https://images.unsplash.com/photo-1605629713998-167cdc70afa2"
    },
    {
      title: "Flowers of friendship",
      img: "https://images.unsplash.com/photo-1503796964332-e25e282e390f"
    },
    {
      title: "Ocean Waves",
      img: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f"
    },
    {
      title: "New York City",
      img: "https://images.unsplash.com/photo-1584351583369-6baf055b51a7"
    },
    {
      title: "Dark Side",
      img: "https://images.unsplash.com/photo-1516663713099-37eb6d60c825"
    }
  ];

  return (
    <div className="w-full h-screen overflow-hidden relative">
      {data.map((item, i) => (
        <section
          key={i}
          ref={(el) => (sectionsRef.current[i] = el)}
          className="absolute inset-0 w-full h-full opacity-0"
        >
          <div ref={(el) => (outerRef.current[i] = el)} className="w-full h-full">
            <div ref={(el) => (innerRef.current[i] = el)} className="w-full h-full">
              
              {/* Background */}
              <div
                ref={(el) => (imagesRef.current[i] = el)}
                className="w-full h-full flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Title */}
                <h2
                  ref={(el) => (titlesRef.current[i] = el)}
                  className="relative z-10 text-white text-4xl md:text-7xl tracking-[0.3em] font-serif text-center"
                >
                  {item.title}
                </h2>
              </div>

            </div>
          </div>
        </section>
      ))}
    </div>
  );
}