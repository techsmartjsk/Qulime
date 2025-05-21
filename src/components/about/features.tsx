
import Science from "@/assets/about/features/science.png"
import MicroNeedling from "@/assets/about/features/microneedling.png"
import LEDTherapy from "@/assets/about/features/LED therapy.png"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

const featureData = [
  {
    heading: "Multi-Functional Facial Machine",
    description: `This all-in-one facial system offers a combination of deep cleansing, exfoliation, lifting, and hydration. It uses multiple technologies like high-frequency, galvanic, vacuum suction, and spray mist to purify pores, improve circulation, and enhance product absorption. Perfect for dull, congested, or tired skin — it's our go-to for a refreshing and instantly revitalized glow.`,
    image: Science,
  },
  {
    heading: "Microneedling & Dermapen Tools",
    description: `Designed to rejuvenate from within, this tool creates controlled micro-channels in the skin to stimulate natural collagen and elastin production. It’s ideal for reducing acne scars, fine lines, enlarged pores, and uneven texture. The result? Firmer, smoother, more radiant skin all through a non-invasive yet highly effective method.`,
    image: MicroNeedling,
  },
  {
    heading: "LED Light Therapy Mask",
    description: `A futuristic-looking favorite, this mask uses specific wavelengths of light to target skin issues at a cellular level. Red light promotes anti-aging and collagen synthesis, blue light combats acne-causing bacteria, and near-infrared light supports deep tissue repair. It’s completely non-invasive, pain-free, and perfect for post-treatment recovery or routine skin maintenance.`,
    image: LEDTherapy,
  },
]

export const Features = () => {
  return (
    <div className="my-10 space-y-10">
        <p className="text-center font-bold font-istok text-xl lg:text-3xl">SCIENCE BEHIND THE GLOW</p>
      {featureData.map((item, index) => (
        <div
          key={index}
          className={`border-t-[1px] border-b-[1px] w-full border-black flex flex-col ${
            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          }`}
        >
          <div className={`lg:w-1/2 flex items-center justify-center border-black border-b-[1px] lg:border-b-0 ${index % 2 === 0 ? "lg:border-r-[1px]" : "lg:border-l-[1px]"}`}>
            <div className="flex flex-col gap-y-3 lg:gap-y-4 px-10 py-5 lg:px-20">
              <p className="font-bold font-istok text-[#31533E] text-xl lg:text-3xl">
                {item.heading}
              </p>
              <p className="font-darker text-sm lg:text-lg font-medium">
                {item.description}
              </p>
              <a href="/services" className="flex gap-x-2 border-[1px] items-center border-[#31533E] px-2 py-1 lg:px-4 lg:py-2 w-fit font-istok text-sm lg:text-md"><p>Know More</p> <ExternalLink size={14}/> </a>
            </div>
          </div>
          <Image
            src={item.image}
            alt={item.heading}
            className="lg:w-1/2"
          />
        </div>
      ))}
    </div>
  )
}
