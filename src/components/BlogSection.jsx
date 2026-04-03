'use client';
import React from 'react';

const CalendarIcon = () =>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width={16} height={16} style={{ fill: '#1c1c1c', flexShrink: 0 }}>
    <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z" />
  </svg>;


const featuredBlog = {
  category: 'Cooking',
  date: 'May 8, 2025',
  title: 'The silent hidden power of acid in every dish',
  image: 'https://framerusercontent.com/images/BNq0u0BQiBExqomRIGa2cKoo4I.png',
  href: '#blog'
};

const otherBlogs = [
{
  category: 'Cooking',
  date: 'May 14, 2025',
  title: 'From pan to plate: timing is everything',
  image: 'https://framerusercontent.com/images/YbdX1JQXqNYeMR06CBWYP0NsS94.png',
  href: '#blog'
},
{
  category: 'Insights',
  date: 'May 18, 2025',
  title: 'Cooking with color: what your plate is missing',
  image: 'https://framerusercontent.com/images/mdZqGJH4VRvcV6hQ9x25cPPYIsg.png',
  href: '#blog'
},
{
  category: 'Tips',
  date: 'May 2, 2025',
  title: 'The one knife skill that changes everything',
  image: 'https://framerusercontent.com/images/aVRHw5uueHGQ99wisnfZXmILc.png',
  href: '#blog'
}];


export default function BlogSection() {
  return (
    <section id="blog" className="w-full flex flex-col items-center py-12 md:py-14">
      <div className="w-full max-w-[1200px] px-4 md:px-6 flex flex-col items-center gap-12 md:gap-14">

        {/* HEADING */}
        <div className="flex flex-col items-center gap-5 max-w-[520px] text-center">
          <span className="section-tag">Fresh tips & updates</span>

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
            Food stories and blogs
          </h2>

          <p className="text-[15px] md:text-[18px] text-[#717171] max-w-[430px]">
            Stay updated with the latest trends in dining, food recipes, and exclusive news from Marioria
          </p>

          <a href="#blog" className="btn-primary">
            Read more
          </a>
        </div>

        {/* GRID */}
        <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">

          {/* FEATURED */}
          <div>
            <a href={featuredBlog.href} className="flex flex-col gap-5">

              <div className="relative w-full h-[220px] sm:h-[300px] md:h-[400px] rounded-[18px] overflow-hidden">
                <img
                  src={featuredBlog.image}
                  alt={featuredBlog.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute top-4 left-4">
                  <span className="category-badge">{featuredBlog.category}</span>
                </div>
              </div>

              <div className="flex flex-col gap-3 md:gap-4">

                <div className="flex items-center gap-2 text-[12px]">
                  <CalendarIcon />
                  <span>{featuredBlog.date}</span>
                </div>

                <h3
                  style={{
                    fontFamily: 'Averia Serif Libre, serif',
                    fontSize: 'clamp(22px, 3vw, 38px)',
                    lineHeight: '1.3em',
                    margin: 0
                  }}
                >
                  {featuredBlog.title}
                </h3>

              </div>

            </a>
          </div>

          {/* OTHER BLOGS */}
          <div className="flex flex-col gap-6">

            {otherBlogs.map((blog) => (
              <a
                key={blog.title}
                href={blog.href}
                className="flex flex-row gap-4 md:gap-5 items-start"
              >

                {/* IMAGE */}
                <div className="w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] md:w-[160px] md:h-[160px] rounded-[16px] overflow-hidden flex-shrink-0">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* TEXT */}
                <div className="flex flex-col gap-2 md:gap-3">

                  <span className="category-badge w-fit">
                    {blog.category}
                  </span>

                  <p className="text-[15px] sm:text-[18px] md:text-[22px] font-medium leading-snug">
                    {blog.title}
                  </p>

                  <div className="flex items-center gap-2 text-[12px]">
                    <CalendarIcon />
                    <span>{blog.date}</span>
                  </div>

                </div>

              </a>
            ))}

          </div>

        </div>

      </div>
    </section>);

}