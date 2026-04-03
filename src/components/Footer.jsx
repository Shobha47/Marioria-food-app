'use client';
import React from 'react';

const XIcon = () =>
<img src="https://framerusercontent.com/images/qCekVumsCnXSrkItKzIlnv0Oc.svg" alt="X" width={12} height={12} style={{ filter: 'invert(1)' }} />;


const InstagramIcon = () =>
<img src="https://framerusercontent.com/images/9VR5WZfp2N0quFY3K2DJxzqX0.svg" alt="Instagram" width={12} height={12} style={{ filter: 'invert(1)' }} />;


const FacebookIcon = () =>
<img src="https://framerusercontent.com/images/ybNQCspEH6051Wa3yX6UBwJEo.svg" alt="Facebook" width={12} height={12} style={{ filter: 'invert(1)' }} />;


const TikTokIcon = () =>
<img src="https://framerusercontent.com/images/EyXxbd4FjPlo15YnMxm5gVyRgJc.svg" alt="TikTok" width={12} height={12} style={{ filter: 'invert(1)' }} />;


const EmailIcon = () =>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16} style={{ fill: '#ff6a0c' }}>
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>;


const PhoneIcon = () =>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16} style={{ fill: '#ff6a0c' }}>
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>;


const LocationIcon = () =>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16} style={{ fill: '#ff6a0c' }}>
    <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm4 8h-3v3h-2v-3H8V8h3V5h2v3h3v2z" />
  </svg>;


export default function Footer() {
  const menuLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  { label: 'Book a table', href: '#reservation' },
  { label: 'Gallery', href: '#gallery' }];


  const cmsLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'Chef', href: '#' },
  { label: 'Blog', href: '#blog' }];


  const contactLinks = [
  { icon: <EmailIcon />, label: 'testing@gmail.com', href: 'mailto:testing@gmail.com' },
  { icon: <PhoneIcon />, label: '+123 456 789', href: 'tel:+123456789' },
  { icon: <LocationIcon />, label: 'Los Angeles', href: 'https://maps.app.goo.gl/riHY854fx5t8Df4H8' }];


  const socialLinks = [
  { icon: <XIcon />, href: 'https://x.com' },
  { icon: <InstagramIcon />, href: 'https://www.instagram.com/' },
  { icon: <FacebookIcon />, href: 'https://www.facebook.com/' },
  { icon: <TikTokIcon />, href: 'http://tiktok.com/' }];


  return (
    <footer className="w-full flex justify-center py-12 md:py-14">
      <div className="w-full max-w-[1200px] px-4 md:px-6 flex flex-col gap-12 md:gap-16">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">

          {/* BRAND */}
          <div className="flex flex-col gap-6">
            <a
              href="/"
              style={{
                fontFamily: 'Averia Serif Libre, serif',
                fontSize: '28px',
                letterSpacing: '-0.05em',
                textDecoration: 'none'
              }}
            >
              Marioria
            </a>

            <p className="text-[16px] md:text-[18px] text-[#717171] max-w-[300px]">
              A modern Framer template for premium Restaurants
            </p>

            <div className="flex flex-col gap-2">
              <p className="text-[16px] font-medium">Follow us</p>

              <div className="flex gap-2">
                {socialLinks.map((social, idx) => (
                  <a key={idx} href={social.href} className="social-icon-btn">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* MENU */}
          <div className="flex flex-col gap-5">
            <p className="text-[18px] md:text-[20px] font-medium">Menu</p>

            <div className="flex flex-col gap-3">
              {menuLinks.map((link) => (
                <a key={link.label} href={link.href} className="footer-link">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* CMS */}
          <div className="flex flex-col gap-5">
            <p className="text-[18px] md:text-[20px] font-medium">CMS Pages</p>

            <div className="flex flex-col gap-3">
              {cmsLinks.map((link) => (
                <a key={link.label} href={link.href} className="footer-link">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div className="flex flex-col gap-5">
            <p className="text-[18px] md:text-[20px] font-medium">Contact</p>

            <div className="flex flex-col gap-4">
              {contactLinks.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="flex items-center gap-3"
                >
                  <div className="contact-icon-wrapper">
                    {contact.icon}
                  </div>
                  <span className="text-[14px] md:text-[16px]">
                    {contact.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </footer>);

}