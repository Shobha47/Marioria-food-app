'use client';
import React, { useState, useRef } from 'react';
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const menuItems = [
{ id: 1, name: 'Mashed potatoes', price: 'USD 10.00', image: 'https://framerusercontent.com/images/y6PIoo5WTtkbe5Z5DzRoEjlM.png', vegan: true },
{ id: 2, name: 'Truffle fries', price: 'USD 42.00', image: 'https://framerusercontent.com/images/1lzyqTcBD3UWUe0B3v5U2gqi25Q.png', vegan: true },
{ id: 3, name: 'Caesar salad', price: 'USD 30.00', image: 'https://framerusercontent.com/images/ZvhZC2bdKW8DrC10ZWDh8Dr0Vi0.png', vegan: false },
{ id: 4, name: 'Mushroom soup', price: 'USD 70.00', image: 'https://framerusercontent.com/images/7zIHgBL3aoxG5tZwXwk559UFCo.png', vegan: true },
{ id: 5, name: 'Crème brûlée', price: 'USD 120.00', image: 'https://framerusercontent.com/images/0jF2Yixhb1QDtAtyXKJj9q0Hkk.png', vegan: false },
{ id: 6, name: 'NY cheesecake', price: 'USD 60.00', image: 'https://framerusercontent.com/images/lbOlo84SP9trjjPX6PnjDgQRDI.png', vegan: false },
{ id: 7, name: 'Molten lava cake', price: 'USD 80.00', image: 'https://framerusercontent.com/images/AN9MXM8YvKmDSeg7JUR0OvHE64.png', vegan: false },
{ id: 8, name: 'Classic tiramisu', price: 'USD 27.00', image: 'https://framerusercontent.com/images/MHvw6bOdq5W52ySX3RoGNo6c.png', vegan: false },
{ id: 9, name: 'Cheese crostini', price: 'USD 18.00', image: 'https://framerusercontent.com/images/3qDzZDWGMWIGy6UU038CZpTlRQ.png', vegan: true },
{ id: 10, name: 'Chilled gazpacho', price: 'USD 40.00', image: 'https://framerusercontent.com/images/Un9tYk7anUiE8OyhSWCfr4xLuAU.png', vegan: true },
{ id: 11, name: 'Smoked salmon', price: 'USD 50.00', image: 'https://framerusercontent.com/images/199zznhnm6h1d2v34IYP6zc9EtY.png', vegan: false },
{ id: 12, name: 'Caprese salad', price: 'USD 70.00', image: 'https://framerusercontent.com/images/G5wzFKvwx0ZSTWJEXTcepsXzHtE.png', vegan: true }];

const tabs = ['Full Menu', 'Courses', 'Desserts', 'Starters', 'Appetizers'];

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState('Full Menu');
  const images = useRef();
  const gridRef = useRef();

  useEffect(() => {
  const ctx = gsap.context(() => {

    gsap.fromTo(
      ".dish-card",
      {
        y: 80,
        opacity: 0,
        scale: 0.95,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 140%",
          scrub: 1.2
        }
      }
    );

  }, gridRef);

  return () => ctx.revert();
}, []);

  return (
    <section id="menu" className="w-full flex flex-col items-center py-10 md:py-14">
      <div className="w-full max-w-[1200px] px-4 md:px-6 flex flex-col items-center gap-10 md:gap-12">

        {/* HEADING */}
        <div className="flex flex-col items-center gap-4 max-w-[520px] text-center">
          <span className="section-tag">This is what we serve you</span>

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
            Discover the perfect meal for every taste
          </h2>
        </div>

        {/* TABS */}
        <div className="w-full overflow-x-auto">
          <div className="flex gap-2 min-w-max justify-start md:justify-center">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`menu-tab whitespace-nowrap ${
                  activeTab === tab
                    ? 'menu-tab-active'
                    : 'menu-tab-inactive'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* GRID */}
        <div  ref={gridRef} className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 place-items-center">

          {menuItems.map((item) => (
            <a key={item.name} href="#menu" className="dish-card group flex flex-col justify-center items-center">

              {/* IMAGE */}
              <div ref={images} className="relative w-full max-w-[200px] aspect-square mx-auto">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-full transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-3"
                />
              </div>

              {/* TEXT */}
              <div className="flex flex-col items-center gap-1 mt-3 w-full">

                <div className="flex items-center justify-center gap-2 flex-wrap">
                  <p className="text-[15px] md:text-[18px] text-center">
                    {item.name}
                  </p>

                  {item.vegan && (
                    <img
                      src="https://framerusercontent.com/images/tivDBH4CZPYbhIZXWC10PRdIZM.svg"
                      alt="vegan"
                      className="w-3 h-3"
                    />
                  )}
                </div>

                <p className="text-[13px] md:text-[14px] opacity-60">
                  {item.price}
                </p>

              </div>
            </a>
          ))}
        </div>

      </div>
    </section>);

}