import ServiceCard from "@/components/modules/SerivceCard/ServiceCard";
import React from "react";

export default function ServicesDetails({ services }) {
  return (
    <div class="container-fluid pt-5">
      <div class="container">
        <div class="section-title">
          <h4 class="text-primary text-uppercase" style={{ letterSpacing: 5 }}>
            Our Services
          </h4>
          <h1 class="display-4">Fresh & Organic Beans</h1>
        </div>
        <div class="row">
          {services.map((item) => (
            <ServiceCard {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
