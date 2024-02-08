import Image from "next/image";
import { Inter } from "next/font/google";
import Slider from "@/components/templates/Index/Slider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${inter.className}`}>
      <Slider />
    </div>
  );
}
