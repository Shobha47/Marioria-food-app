'use client';
import React, { useState } from 'react';

const faqs = [
  {
    question: 'How can I book a table at Marioria?',
    answer: "Simply visit our booking page, choose your date, time, and number of guests, and we'll confirm your reservation.",
  },
  {
    question: 'Are there vegetarian options available on the menu?',
    answer: 'Yes! We offer a wide variety of vegetarian dishes crafted with the freshest seasonal ingredients.',
  },
  {
    question: 'What makes your sauces special?',
    answer: 'Our sauces are made in-house using traditional recipes with fresh herbs, spices, and locally sourced ingredients.',
  },
  {
    question: 'Who are the chefs at Marioria?',
    answer: 'Our team of experienced chefs brings decades of culinary expertise from around the world to create exceptional dishes.',
  },
  {
    question: 'Can I request a special dish for an event?',
    answer: 'Absolutely! We offer custom menus for private events and special occasions. Contact us to discuss your needs.',
  },
  {
    question: 'Do you offer gluten-free options?',
    answer: 'Yes, we have a dedicated gluten-free menu. Please inform our staff of any dietary requirements when booking.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full flex flex-col items-center" style={{ padding: '64px 0' }}>
      <div className="w-full max-w-[1200px] px-[25px] flex flex-col items-center gap-[64px]">
        {/* Heading */}
        <div className="flex flex-col items-center gap-[22px] max-w-[520px]">
          <span className="section-tag">Your questions, answered</span>
          <h2
            className="text-center"
            style={{
              fontFamily: 'Averia Serif Libre, serif',
              fontSize: 'clamp(34px, 4vw, 52px)',
              fontWeight: 300,
              letterSpacing: '-0.07em',
              lineHeight: '1.15em',
              color: '#1c1c1c',
              margin: 0,
            }}
          >
            Answers to your most common questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-[24px] w-full max-w-[580px]">
          {faqs.map((faq, idx) => (
            <div key={idx}>
              <div
                className="faq-item flex flex-col gap-[12px]"
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              >
                <div className="flex flex-row items-center justify-between gap-[24px] w-full">
                  <p
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '20px',
                      fontWeight: 500,
                      letterSpacing: '-0.05em',
                      lineHeight: '1.5em',
                      color: '#000000',
                      margin: 0,
                      flex: 1,
                    }}
                  >
                    {faq.question}
                  </p>
                  <div
                    className="flex items-center justify-center flex-shrink-0"
                    style={{
                      width: '26px',
                      height: '26px',
                      borderRadius: '1000px',
                      backgroundColor: '#ff6a0c',
                    }}
                  >
                    <div
                      style={{
                        width: '13px',
                        height: '12px',
                        transition: 'transform 0.3s ease',
                        transform: openIndex === idx ? 'rotate(90deg)' : 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        width={13}
                        height={12}
                        style={{ fill: '#ffffff' }}
                      >
                        <path d="M18 36l12-12-12-12" stroke="#ffffff" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                {openIndex === idx && (
                  <p
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                      letterSpacing: '-0.045em',
                      lineHeight: '1.55em',
                      color: '#717171',
                      margin: 0,
                      maxWidth: '90%',
                    }}
                  >
                    {faq.answer}
                  </p>
                )}
              </div>
              {idx < faqs.length - 1 && <div className="divider-line mt-4" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
