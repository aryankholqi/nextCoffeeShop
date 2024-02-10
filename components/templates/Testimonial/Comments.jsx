import { TestimonialCard } from "@/components/modules/TestimonialCard/TestimonialCard";
import React from "react";

export default function Comments({ comments }) {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="text-primary text-uppercase"
            style={{ letterSpacing: 5 }}
          >
            Testimonial
          </h4>
          <h1 className="display-4">Our Clients Say</h1>
        </div>
        <div className="owl-carousel testimonial-carousel">
          {comments.slice(0, 4).map((item, index) => (
            <TestimonialCard item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
