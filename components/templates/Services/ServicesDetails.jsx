import ServiceCard from "@/components/modules/SerivceCard/ServiceCard";
import React from "react";

export default function ServicesDetails({ services }) {
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="text-primary text-uppercase"
            style={{ letterSpacing: 5 }}
          >
            Our Services
          </h4>
          <h1 className="display-4">Fresh & Organic Beans</h1>
        </div>
        <div className="row">
          {services.map((item, index) => (
            <ServiceCard {...item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
