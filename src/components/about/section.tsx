import Office from "@/assets/about/office.png"
import Team from "@/assets/founders.png"
import Image from "next/image"

export const AboutSection = () => {
    return (
        <div>
            <div className="relative">
                <Image src={Office} className="lg:h-[300px] w-full object-cover" alt={"Office"}></Image>
                <p className="absolute bottom-[20px] left-[20px] text-xl lg:text-3xl font-bold">Know Our Journey</p>
            </div>
            
            <div className="my-10">
                <div className="border-t-[1px] border-b-[1px] w-full border-black flex flex-col-reverse lg:flex-row">
                    <div className="lg:w-1/2 flex items-center justify-center border-r-[1px] border-black">
                        <div className="flex flex-col gap-y-3 lg:gap-y-4 px-10 py-5 lg:px-20">
                            <p className="font-darker text-sm lg:text-md">SKIN FIRST PHILOSOPHY</p>
                            <p className="font-bold font-istok text-[#31533E] text-xl lg:text-3xl">MEET THE FOUNDERS</p>
                            <p className="font-darker text-sm lg:text-lg font-medium">At the heart of QiLumé Aesthetics are two dynamic women; each bringing their unique expertise, vision, and energy to redefine the future of beauty and wellness.</p>
                        </div>
                    </div>
                    <Image src={Team} alt={"Team"} className="lg:w-1/2"></Image>
                </div>
            </div>
        </div>
    )
}