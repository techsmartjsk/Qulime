import React from 'react';
import Image from 'next/image'; // Use next/image if in Next.js, else replace with <img>
import heroMain from '@/assets/hero/first.png';
import img1 from '@/assets/hero/second.png';
import img2 from '@/assets/hero/third.png';
import acneIcon from '@/assets/banner/acne.png';
import pigmentIcon from '@/assets/banner/drop.png';
import antiAgeIcon from '@/assets/banner/coffee.png';

export const Hero = () => {
  return (
    <section className="bg-[#EFEAE6] py-5 lg:py-10 flex flex-col-reverse md:flex-row justify-between items-center gap-12">
      <div className="lg:w-3/5 space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-8xl text-center font-bold text-[#1b1b1b] leading-tight font-abril">
          Feel Confident in <br /> Your Skin
        </h1>
        <p className="text-[#4a4a4a] text-center text-sm md:text-base">
          Safe, effective skin treatment guided by real dermatologist
        </p>
        <button className="bg-[#31533E] flex mx-auto text-white py-1.5 px-3 lg:py-3 lg:px-6 rounded-2xl text-md lg:text-xl font-medium">
          Book Consultation
        </button>

        <div className="flex justify-between lg:justify-center lg:gap-x-32 mt-8 mx-auto w-full px-5">
          <div className="flex flex-col items-center text-sm">
            <div className='h-[70px] lg:h-[100px] flex items-center justify-center'>
                <Image src={acneIcon} alt="Anti-Ageing" />
            </div>
            <p className="mt-2 text-sm lg:text-lg text-center">Acne & Scars <br /> Repair</p>
          </div>
          <div className="flex flex-col items-center text-sm">
            <div className='h-[70px] lg:h-[100px] flex items-center justify-center'>
                <Image src={pigmentIcon} alt="Anti-Ageing" />
            </div>
            <p className="mt-2 text-sm lg:text-lg text-center">Pigmentation <br /> Treatment</p>
          </div>
          <div className="flex flex-col items-center text-sm">
            <div className='h-[70px] lg:h-[100px] flex items-center justify-center'>
            <Image src={antiAgeIcon} alt="Anti-Ageing"/>
            </div>
            <p className="mt-2 text-sm lg:text-lg text-center">Anti-Ageing <br /> Solutions</p>
          </div>
        </div>
      </div>

      <div className="relative px-5 lg:px-0 lg:w-2/5">
        <Image src={heroMain} alt="Main face care" className="rounded-lg" />
        <div className="absolute bottom-[-30px] flex mt-4 justify-center mx-auto gap-x-4 px-8">
          <Image src={img1} alt="Step 1" className="rounded-md w-[80px] h-[80px] lg:h-[143px] lg:w-[143px]" />
          <Image src={img2} alt="Step 2" className="rounded-md w-[80px] h-[80px] lg:h-[143px] lg:w-[143px]" />
          <Image src={img1} alt="Step 1" className="rounded-md w-[80px] h-[80px] lg:h-[143px] lg:w-[143px]" />
        </div>
      </div>
    </section>
  );
};
