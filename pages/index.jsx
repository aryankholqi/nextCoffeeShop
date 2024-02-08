import { Inter } from "next/font/google";
import Slider from "@/components/templates/Index/Slider";
import About from "@/components/templates/Index/About";
import ServicesDetails from "@/components/templates/Services/ServicesDetails";
import { Services } from "@/components/templates/Index/Services";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${inter.className}`}>
      <Slider />
      <About />
      <Services />
    </div>
  );
}
