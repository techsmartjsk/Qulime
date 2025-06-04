import HealthySkin from "@/assets/banner/healthy_skin.png"
import Team from "@/assets/founders.png"
import Image from "next/image"

export const AboutSection = () => {
    return (
        <div>
            <Image src={HealthySkin} className="lg:h-[300px] w-full object-cover" alt={"Healthy Skin"}></Image>
            
            <div className="my-10">
                <div className="border-t-[1px] border-b-[1px] w-full border-black flex flex-col-reverse lg:flex-row">
                    <div className="lg:w-1/2 flex items-center justify-center border-r-[1px] border-black">
                        <div className="flex flex-col gap-y-3 lg:gap-y-4 px-10 py-5 lg:px-20">
                            <p className="font-darker text-sm lg:text-md">SKIN FIRST PHILOSOPHY</p>
                            <p className="font-bold font-istok text-[#31533E] text-xl lg:text-3xl">ELEVATED BY EXPERTS</p>
                            <p className="font-darker text-sm lg:text-lg font-medium">Each session at QiLumé is thoughtfully designed by trained professionals, combining
advanced techniques and personalized care to bring visible clarity, restored
balance, and long-lasting skin health you can truly feel and celebrate.</p>
                        </div>
                    </div>
                    <Image src={Team} alt={"Team"} className="lg:w-1/2"></Image>
                </div>
            </div>
        </div>
    )
}