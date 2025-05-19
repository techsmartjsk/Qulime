import Image from "next/image"
import healthy_skin from "@/assets/banner/healthy_skin.png"

export const ImageSection = () => {
    return (
        <div className="py-10 bg-[#EFEAE6] relative">
            <Image src={healthy_skin} alt="Healthy Skin" className="w-full h-[500px] object-cover lg:h-auto" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <p className="font-alatsi text-3xl font-semibold text-white lg:text-6xl mb-4">
                    Healthy skin is beautiful skin.
                </p>
                <p className="font-darker text-lg text-white lg:text-xl max-w-[500px]">
                    At QiLumé Aesthetics, we don’t mask beauty—we awaken it.
                    Thoughtful care, glowing skin, and confidence that lasts longer than any filter.
                </p>
            </div>
        </div>
    )
}
