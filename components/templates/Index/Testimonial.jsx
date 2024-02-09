import { TestimonialCard } from "@/components/modules/TestimonialCard/TestimonialCard";
import React from "react";

export default function Testimonial({ comments }) {
  return (
    <div class="container-fluid py-5">
      <div class="container">
        <div class="section-title">
          <h4 class="text-primary text-uppercase" style={{ letterSpacing: 5 }}>
            Testimonial
          </h4>
          <h1 class="display-4">Our Clients Say</h1>
        </div>
        <div class="owl-carousel testimonial-carousel">
          {comments.slice(0, 4).map((item) => (
            <TestimonialCard item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
