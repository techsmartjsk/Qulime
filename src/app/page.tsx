import Footer from "@/components/common/footer";
import { Navbar } from "@/components/common/navbar";
import { Hero } from "@/components/home/hero/banner";
import { ImageSection } from "@/components/home/image/image.section";
import { Text } from "@/components/home/note/text";
import TreatmentsGrid from "@/components/home/services/grid";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <Text/>
      <ImageSection/>
      <TreatmentsGrid/>
      <Footer/>
    </div>
  );
}
