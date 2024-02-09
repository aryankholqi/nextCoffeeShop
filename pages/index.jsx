import { Inter } from "next/font/google";
import Slider from "@/components/templates/Index/Slider";
import About from "@/components/templates/Index/About";
import { Services } from "@/components/templates/Index/Services";
import { Offer } from "@/components/templates/Index/Offer";
import { Menu } from "@/components/templates/Index/Menu";
import Reservation from "@/components/templates/Index/Reservation";
import Testimonial from "@/components/templates/Index/Testimonial";
import Footer from "@/components/modules/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  return (
    <div className={`${inter.className}`}>
      <Slider />
      <About />
      <Services services={data.services} />
      <Offer />
      <Menu menu={data.menu} />
      <Reservation />
      <Testimonial comments={data.comments} />
    </div>
  );
}

export async function getStaticProps() {
  const servicesResponse = await fetch("http://localhost:4000/services");
  const services = await servicesResponse.json();

  const menuResponse = await fetch("http://localhost:4000/menu");
  const menu = await menuResponse.json();

  const commentResponse = await fetch("http://localhost:4000/comments");
  const comments = await commentResponse.json();
  return {
    props: {
      data: {
        services,
        menu,
        comments,
      },
    },
    revalidate: 60 * 60 * 12,
  };
}
