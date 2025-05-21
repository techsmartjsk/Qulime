"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import logo from "@/assets/logo.png";
import Link from 'next/link';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="bg-[#EFEAE6] w-full py-5 lg:py-2 relative z-50">
      <div className="flex justify-between items-center px-5 lg:px-20">
        <Image src={logo} alt="Qulime Aesthetics" className='w-[250px] lg:w-[400px] lg:mx-auto' />

        <div className="lg:hidden z-50">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div className='hidden lg:flex justify-center items-center gap-x-32 py-5 font-istok'>
        <Link href="/" className='text-lg'>Home</Link>
        <Link href="/about" className='text-lg'>About us</Link>
        <Link href="/contact" className='text-lg'>Contact us</Link>
        <Link href="/services" className='text-lg'>Our Services</Link>
        <Link href="/contact" className='text-lg text-white bg-[#31533E] px-6 py-3 rounded-2xl'>Book Consultation</Link>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#EFEAE6] flex flex-col items-center justify-center gap-y-5 font-istok transition-all duration-300 ease-in-out z-40 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <Link href="/" className='text-lg' onClick={toggleMenu}>Home</Link>
        <Link href="/about" className='text-lg' onClick={toggleMenu}>About us</Link>
        <Link href="/contact" className='text-lg' onClick={toggleMenu}>Contact us</Link>
        <Link href="/services" className='text-lg' onClick={toggleMenu}>Our Services</Link>
        <Link href="/contact" className='text-lg text-white bg-[#31533E] px-6 py-3 rounded-2xl' onClick={toggleMenu}>Book Consultation</Link>
      </div>
    </div>
  );
};
