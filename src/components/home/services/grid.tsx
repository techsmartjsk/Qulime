import TreatmentCard from "./card";
import hyperpigmentation from "@/assets/services/hyperpigmentation.png";
import acne from "@/assets/services/acne.png";
import weightloss from "@/assets/services/non-surgical-weight-loss.png";
import antiaging from "@/assets/services/anti-aging.png";
import regenerative from "@/assets/services/regeneration.png";
import rejuvenation from "@/assets/services/skin-rejuvanation.png";
import { StaticImageData } from "next/image";

interface Treatment {
  image: StaticImageData;
  title: string;
  description: string;
}

const treatments: Treatment[] = [
  {
    image: hyperpigmentation,
    title: "Hyperpigmentation",
    description: "Fade dark spots and achieve even-toned skin with specialized laser and peel solutions.",
  },
  {
    image: acne,
    title: "Acne & Acne Marks",
    description: "Target breakouts and scarring with our expert-led acne control and resurfacing treatments.",
  },
  {
    image: weightloss,
    title: "Non-Surgical Weight Loss",
    description: "Sculpt your body with cryolipolysis, RF, and fat-reduction treatments—no downtime required.",
  },
  {
    image: antiaging,
    title: "Anti-Aging Treatments",
    description: "Smooth fine lines and firm skin using Botox, HIFU, thread lifts, and more.",
  },
  {
    image: regenerative,
    title: "Regenerative Treatments",
    description: "Heal from within with PRP, microneedling, and IV therapies designed to activate natural renewal.",
  },
  {
    image: rejuvenation,
    title: "Skin Rejuvenation",
    description: "Boost radiance and hydration with facials, peels, and collagen-inducing therapies.",
  },
];

const TreatmentsGrid: React.FC = () => {
  return (
    <section className="py-4 bg-[#EFEAE6]">
      <h2 className="text-3xl font-bold text-center mb-10 font-abhaya text-2xl lg:text-5xl">Our Treatments</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5 lg:px-10 mx-auto px-4">
        {treatments.map((treatment, index) => (
          <TreatmentCard key={index} {...treatment} />
        ))}
      </div>
      <div className="text-center mt-12">
        <h3 className="text-2xl font-semibold mb-2 font-abhaya text-3xl lg:text-4xl">Find what Feels Right</h3>
        <p className="text-gray-600 mb-4 text-sm lg:text-xl">
          No one-size-fits-all here—check out the full range of treatments we offer.
        </p>
        <button className="bg-[#34523E] text-white px-6 py-3 lg:w-[206px] hover:bg-[#2c4434] transition">
          Know Our Services
        </button>
      </div>
    </section>
  );
};

export default TreatmentsGrid;
