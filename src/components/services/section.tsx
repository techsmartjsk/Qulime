import Image from "next/image";
import banner from "@/assets/services/banner.png";
import ServicesGrid from "./services";
import hair from "@/assets/services/banners/hair.png"
import skin from "@/assets/services/banners/skin.png"
import body from "@/assets/services/banners/body.png"
import Link from "next/link";

export const ServiceSection = () => {
  return (
    <div>
      <div className="relative w-full h-[300px]">
        <Image
          src={banner}
          alt="Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-left text-white py-4 px-10 lg:px-20">
          <div className="text-center flex flex-col lg:gap-y-2">
            <p className="font-bold text-left text-xl lg:text-5xl mb-2 text-black font-istok">QILUMÉ SIGNATURE TREATMENTS</p>
            <p className="mb-4 text-black text-left max-w-2xl font-darker text-md lg:text-lg">
              Each of our bespoke skin treatments is carefully curated using
              clinically trusted methods and advanced aesthetic technology —
              designed to restore, renew, and reveal your natural radiance.
            </p>
            <Link
              href="/contact"
              className="bg-[#31533E] uppercase text-white px-4 py-2 rounded-full transition flex justify-left w-fit"
            >
              Book now
            </Link>
          </div>
        </div>
      </div>

      <ServicesGrid/>

      <div className="py-5 lg:py-10">
        <p className="text-center font-bold text-md lg:text-3xl font-abhaya">Total Aesthetic Care, Designed Around You</p>
        <hr className="w-72 h-[1px] my-2 bg-black mx-auto"/>
        <div className="flex flex-col gap-y-6 mt-2 ">
            <div className="relative w-full h-72 md:h-96">
                <Image
                src={skin}
                alt="Skin"
                className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-20">
                    <h2 className="font-abhaya text-white text-4xl md:text-9xl font-bold tracking-wide mb-4">SKIN</h2>
                    <Link href="/services/face" className="bg-[#31533E] text-white px-6 py-2 transition">
                        Explore Face Treatments
                    </Link>
                </div>
            </div>

            <div className="relative w-full h-72 md:h-96">
                <Image
                src={hair}
                alt="Hair"
                className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-20">
                    <h2 className="font-abhaya text-white text-4xl md:text-9xl font-bold tracking-wide mb-4">HAIR</h2>
                    <button className="bg-[#31533E] text-white px-6 py-2 transition">
                        Explore Hair Solutions
                    </button>
                </div>
            </div>

            <div className="relative w-full h-72 md:h-96">
                <Image
                src={body}
                alt="Hair Solutions"
                className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-20">
                    <h2 className="font-abhaya text-white text-4xl md:text-9xl font-bold tracking-wide mb-4">BODY</h2>
                    <button className="bg-[#31533E] text-white px-6 py-2 transition">
                        Explore Body Contouring
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
