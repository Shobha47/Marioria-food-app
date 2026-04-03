'use client';
import React from 'react';

const StarIcon = ({ color = '#ffffff', size = 15 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width={size} height={size} style={{ fill: color, flexShrink: 0 }}>
    <g weight="fill">
      <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z" />
    </g>
  </svg>
);

export default function CTASection() {
  return (
    <section className="cta-section w-full flex flex-col items-center relative overflow-hidden py-12 md:py-16">

      {/* DECORATIVE IMAGES (RESPONSIVE) */}

      {/* small left */}
      <div className="hidden sm:block absolute top-2 left-[6px] md:left-[10px] w-[90px] h-[110px] md:w-[125px] md:h-[150px] rounded-[18px] overflow-hidden shadow-md">
        <img src="https://framerusercontent.com/images/FvqsKNRAGRsG1OOEOS6Nbj1pRk.png" className="w-full h-full object-cover" />
      </div>

      {/* small right */}
      <div className="hidden sm:block absolute top-2 right-[6px] md:right-[10px] w-[90px] h-[110px] md:w-[125px] md:h-[150px] rounded-[18px] overflow-hidden shadow-md">
        <img src="https://framerusercontent.com/images/It8wJznDqDO3Vxa5RCqaZdU0.jpg" className="w-full h-full object-cover" />
      </div>

      {/* big right (slightly inside) */}
      <div className="hidden md:block absolute top-[70px] right-[20px] lg:right-[30px] w-[120px] h-[150px] lg:w-[175px] lg:h-[195px] rounded-[22px] overflow-hidden shadow-lg">
        <img src="https://framerusercontent.com/images/gJ3MI4Fk7j2Msu1UZXymlBNj6E.jpg" className="w-full h-full object-cover" />
      </div>

      {/* big left (slightly inside) */}
      <div className="hidden md:block absolute top-[70px] left-[20px] lg:left-[30px] w-[120px] h-[150px] lg:w-[175px] lg:h-[195px] rounded-[22px] overflow-hidden shadow-lg">
        <img src="https://framerusercontent.com/images/BcouyFmi5U5OGsq3s2wuYGENr0.jpg" className="w-full h-full object-cover" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-[1200px] px-4 md:px-6 flex flex-col items-center gap-10 md:gap-16">

        <div className="flex flex-col items-center gap-6 max-w-[550px] text-center">

          <span className="text-[11px] md:text-[12px] font-medium tracking-widest uppercase text-white">
            Reserve your spot today
          </span>

          <h1
            style={{
              fontFamily: 'Averia Serif Libre, serif',
              fontSize: 'clamp(28px, 5vw, 60px)',
              lineHeight: '1.1em',
              letterSpacing: '-0.07em',
              margin: 0,
              color: '#fff'
            }}
          >
            Ready to indulge in a memorable meal?
          </h1>

          <p className="text-[14px] md:text-[18px] text-white/90 max-w-[430px]">
            Reserve your table now and enjoy a delightful dining experience with exceptional flavors
          </p>

          {/* BUTTON + RATING */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">

            <a href="#reservation" className="btn-secondary">
              Book a table
            </a>

            <div className="flex items-center gap-2">
              <span className="text-[13px] md:text-[14px] text-white font-medium">
                (4.9/5)
              </span>

              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <StarIcon key={i} />
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
