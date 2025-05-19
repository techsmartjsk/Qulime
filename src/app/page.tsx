import Footer from "@/components/common/footer";
import { Navbar } from "@/components/common/navbar";
import { Hero } from "@/components/hero/banner";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  );
}
