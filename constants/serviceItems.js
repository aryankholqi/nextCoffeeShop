import serviceImg1 from "@/public/images/service-1.jpg";
import serviceImg2 from "@/public/images/service-2.jpg";
import serviceImg3 from "@/public/images/service-3.jpg";
import serviceImg4 from "@/public/images/service-4.jpg";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faTable,
  faAward,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;
export const serviceItems = [
  {
    id: 1,
    title: "Fastest Door Delivery",
    description:
      "Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor",
    img: serviceImg1,
    icon: (
      <FontAwesomeIcon
        icon={faTruck}
        style={{ fontSize: "1rem", margin: "0 auto" }}
      />
    ),
  },
  {
    id: 2,
    title: "Fresh Coffee Beans",
    description:
      "Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor",
    img: serviceImg2,
    icon: (
      <FontAwesomeIcon
        icon={faAward}
        style={{ fontSize: "1rem", margin: "0 auto" }}
      />
    ),
  },
  {
    id: 3,
    title: "Best Quality Coffee",
    description:
      "Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor",
    img: serviceImg3,
    icon: (
      <FontAwesomeIcon
        icon={faCoffee}
        style={{ fontSize: "1rem", margin: "0 auto" }}
      />
    ),
  },
  {
    id: 4,
    title: "Online Table Booking",
    description:
      "Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor",
    img: serviceImg4,
    icon: (
      <FontAwesomeIcon
        icon={faTable}
        style={{ fontSize: "1rem", margin: "0 auto" }}
      />
    ),
  },
];
