'use client';
import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Blog', href: '#blog' },
    { label: 'Chef', href: '#' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out
      ${mobileOpen || scrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <div className="flex items-center justify-center w-full py-[18px]">
        <div className="flex items-center justify-between w-full max-w-[1200px] px-[25px]">
          {/* Logo */}
          <a
            href="/"
            className={`no-underline ${mobileOpen || scrolled ? 'text-[#1c1c1c]' : 'text-white'}`}
            style={{
              fontFamily: 'Averia Serif Libre, serif',
              fontSize: '28px',
              fontWeight: 400,
              letterSpacing: '-0.07em',
              lineHeight: '1em',
            }}
          >
            Marioria
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks?.map((link) => (
              <a
                key={link?.label}
                href={link?.href}
                
                className={`nav-link hover:text-[#ff6a0c] transition-colors duration-200 ${scrolled ? 'text-[#1c1c1c]' : 'text-white'}`}
              >
                {link?.label}
              </a>
            ))}
          </div>

          {/* Book a Table Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#reservation" className="btn-primary text-sm">
              Book a table
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[2px] w-[20px] bg-[#1c1c1c] transition-all duration-300 ${
                mobileOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`block h-[2px] w-[20px] bg-[#1c1c1c] transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-[2px] w-[20px] bg-[#1c1c1c] transition-all duration-300 ${
                mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navLinks?.map((link) => (
            <a
              key={link?.label}
              href={link?.href}
              className="nav-link py-2 border-b border-gray-50"
              onClick={() => setMobileOpen(false)}
            >
              {link?.label}
            </a>
          ))}
          <a href="#reservation" className="btn-primary text-center mt-2" onClick={() => setMobileOpen(false)}>
            Book a table
          </a>
        </div>
      )}
    </nav>
  );
}
