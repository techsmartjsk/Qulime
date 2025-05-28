import Footer from "@/components/common/footer";
import { Navbar } from "@/components/common/navbar";
import { Hero } from "@/components/home/hero/banner";
import { ImageSection } from "@/components/home/image/image.section";
import { Text } from "@/components/home/note/text";
import TreatmentsGrid from "@/components/home/services/grid";
import HealthySkin from "@/assets/banner/healthy_skin.png"
import Image from "next/image";
import logo_white from "@/assets/logo_white.png"
import { Phone } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      {/* <Navbar/>
      <Hero/>
      <Text/>
      <ImageSection/>
      <TreatmentsGrid/>
      <Footer/> */}
      <div className="relative h-screen w-full">
        <Image className="h-full w-full object-cover" src={HealthySkin} alt="Coming Soon" />
        <div className="absolute inset-0 flex flex-col py-10 items-center justify-center m-2">
          <p className="text-white text-5xl lg:text-9xl text-center font-abril">COMING SOON</p>
          <Image src={logo_white} alt="Qlime Aesthetics" className="lg:max-w-4xl"></Image>
          <div className="border-[1px] rounded-md max-w-5xl py-5 w-full bg-white/50 bg-opacity-5 flex flex-col justify-center items-center gap-y-6">
            <p className="font-abril text-center text-white text-xl lg:text-3xl">We are open now</p>
            <p className="text-white text-xl lg:text-3xl font-darker text-center lg:max-w-3xl">2027 GF, Sector-45 Opp. SOIL Institute of Inspired
            Leadership Gurgaon - 122003 Haryana</p>
            <div className="flex gap-x-2 mt-4 items-center">
              <div>
              <Phone className="text-xl text-white"/>
              </div>
              <div className="text-white font-bold font-darker text-2xl">+91 96679-29992</div>
            </div>
          </div>
          <Link href="#" className='text-lg lg:text-2xl mt-6 text-white bg-[#31533E] px-10 py-3 rounded-2xl'>Book Consultation</Link>
        </div>
      </div>
    </div>
  );
}
