"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import logo from "@/assets/logo.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Lock/unlock body scroll based on menu state
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

        {/* Mobile Menu Icon */}
        <div className="lg:hidden z-50">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className='hidden lg:flex justify-center items-center gap-x-32 py-5 font-istok'>
        <a className='text-lg'>Home</a>
        <a className='text-lg'>About us</a>
        <a className='text-lg'>Contact us</a>
        <a className='text-lg'>Our Services</a>
        <a className='text-lg text-white bg-[#31533E] px-6 py-3 rounded-2xl'>Book Consultation</a>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#EFEAE6] flex flex-col items-center justify-center gap-y-5 font-istok transition-all duration-300 ease-in-out z-40 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <a className='text-lg' onClick={toggleMenu}>Home</a>
        <a className='text-lg' onClick={toggleMenu}>About us</a>
        <a className='text-lg' onClick={toggleMenu}>Contact us</a>
        <a className='text-lg' onClick={toggleMenu}>Our Services</a>
        <a className='text-lg text-white bg-[#31533E] px-6 py-3 rounded-2xl' onClick={toggleMenu}>Book Consultation</a>
      </div>
    </div>
  );
};
