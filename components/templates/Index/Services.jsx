import ServiceCard from "@/components/modules/SerivceCard/ServiceCard";
import { serviceItems } from "@/constants/serviceItems";
import React from "react";

export const Services = () => {
  return (
    <div class="container-fluid pt-5">
      <div class="container">
        <div class="section-title">
          <h4
            class="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Our Services
          </h4>
          <h1 class="display-4">Fresh & Organic Beans</h1>
        </div>
        <div class="row">
          {serviceItems.map((item) => (
            <ServiceCard
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.img}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
