import ServiceCard from "@/components/modules/SerivceCard/ServiceCard";
import { serviceItems } from "@/constants/serviceItems";
import React from "react";

export const Services = ({ services }) => {
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Our Services
          </h4>
          <h1 className="display-4">Fresh & Organic Beans</h1>
        </div>
        <div className="row">
          {services.map((item) => (
            <ServiceCard
              key={item.id}
              title={item.title}
              description={item.description}
              img={item.img}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
