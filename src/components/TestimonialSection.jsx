'use client';
import React from 'react';

const StarIcon = ({ color = '#ff6a0c', size = 16 }) =>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width={size} height={size} style={{ fill: color, flexShrink: 0 }}>
    <g weight="fill">
      <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z" />
    </g>
  </svg>;


const testimonials = [
{
  name: 'Aisha Rahman',
  date: '19/01/2025',
  text: "We\'ve made Marioria our go-to spot. Their cozy vibe and flavorful dishes make it unforgettable.",
  image: 'https://framerusercontent.com/images/1U7WTBiH7vymdtqEkr0t7dvEUWg.png',
  stars: 4
},
{
  name: 'Ravi Shah',
  date: '27/02/2025',
  text: 'From the first bite to the last sip, everything is crafted with care. Marioria never disappoints.',
  image: 'https://framerusercontent.com/images/AnuZnk0xbPm9vmyFUxnH9U8lXSA.png',
  stars: 5
},
{
  name: 'Sarah Mendez',
  date: '12/03/2025',
  text: 'Every visit to Marioria feels like a special occasion. The presentation and taste are truly unmatched.',
  image: 'https://framerusercontent.com/images/Gtr6MOgUujITbearHKGXDl3riyc.png',
  stars: 5
},
{
  name: 'Luca Romano',
  date: '05/12/2024',
  text: 'What sets Marioria apart is the passion in every plate. The service is just as memorable as the food.',
  image: 'https://framerusercontent.com/images/ZnHnv0ZZfnOp0SabxPWGP8iVh0.png',
  stars: 5
},
{
  name: 'Emily Chen',
  date: '22/11/2024',
  text: 'Fresh ingredients, warm staff, and bold Marioria checks every box for a perfect meal.',
  image: 'https://framerusercontent.com/images/8u6EuCrk7zSVB5jzkedpbsktgzc.png',
  stars: 5
},
{
  name: 'Nina Patel',
  date: '08/04/2025',
  text: "Marioria delivers a perfect balance of flavor and atmosphere. It\'s become our favorite dining spot.",
  image: 'https://framerusercontent.com/images/5SzfWROo4iF2GxUiB5KOILPWzY4.png',
  stars: 4
}];


function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-card">
      <div className="flex flex-row items-center justify-between mb-4">
        <div className="flex flex-row items-center gap-[1px]">
          {Array.from({ length: 5 }).map((_, i) =>
          <StarIcon
            key={i}
            color={i < testimonial.stars ? '#ff6a0c' : 'transparent'}
            size={16} />

          )}
        </div>
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '12px',
            fontWeight: 500,
            letterSpacing: '-0.04em',
            color: '#717171',
            margin: 0
          }}>
          
          {testimonial.date}
        </p>
      </div>
      <p
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '16px',
          fontWeight: 400,
          letterSpacing: '-0.045em',
          lineHeight: '1.55em',
          color: '#717171',
          margin: '0 0 16px'
        }}>
        
        {testimonial.text}
      </p>
      <div className="flex flex-row items-center gap-[14px]">
        <div
          className="relative flex-shrink-0"
          style={{ width: '42px', height: '42px', borderRadius: '1000px', overflow: 'hidden' }}>
          
          <img
            src={testimonial.image}
            alt={testimonial.name}
            fill
            style={{ objectFit: 'cover' }}
            sizes="42px" />
          
        </div>
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '18px',
            fontWeight: 400,
            letterSpacing: '-0.05em',
            lineHeight: '1.55em',
            color: '#000000',
            margin: 0
          }}>
          
          {testimonial.name}
        </p>
      </div>
    </div>);

}

export default function TestimonialsSection() {
  const row1 = testimonials.slice(0, 3);
  const row2 = testimonials.slice(3, 6);

  return (
    <section className="w-full flex flex-col items-center" style={{ padding: '52px 0' }}>
      <div className="w-full max-w-[1200px] px-[25px] flex flex-col items-center gap-[64px]">
        {/* Heading */}
        <div className="flex flex-col items-center gap-5 max-w-[520px] text-center">
          <span className="section-tag">Real experiences, real satisfaction</span>
          <h2
            className="text-center"
            style={{
              fontFamily: 'Averia Serif Libre, serif',
              fontSize: 'clamp(34px, 4vw, 52px)',
              fontWeight: 300,
              letterSpacing: '-0.07em',
              lineHeight: '1.15em',
              color: '#1c1c1c',
              margin: 0
            }}>
            
            Customer reviews that speak for themselves
          </h2>
        </div>

        {/* Testimonials rows with fade mask */}
        <div
          className="w-full flex flex-col gap-[20px] overflow-hidden"
          style={{
            maskImage: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgb(0,0,0) 11.89%, rgb(0,0,0) 51.17%, rgb(0,0,0) 90.09%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgb(0,0,0) 11.89%, rgb(0,0,0) 51.17%, rgb(0,0,0) 90.09%, rgba(0,0,0,0) 100%)'
          }}>
          
          {/* Row 1 - scrolling left */}
          <div className="ticker-wrapper">
            <div className="ticker-track">
              {[...row1, ...row1].map((t, i) =>
              <TestimonialCard key={i} testimonial={t} />
              )}
            </div>
          </div>

          {/* Row 2 - scrolling right */}
          <div className="ticker-wrapper">
            <div className="ticker-track-reverse">
              {[...row2, ...row2].map((t, i) =>
              <TestimonialCard key={i} testimonial={t} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}