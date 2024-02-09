import React from "react";

export const TestimonialCard = ({ item }) => {
  return (
    <div class="testimonial-item">
      <div class="d-flex align-items-center mb-3">
        <img class="img-fluid" src={item.profile} alt="" />
        <div class="ml-3">
          <h4>{item.username}</h4>
          <i>User</i>
        </div>
      </div>
      <p class="m-0">{item.body}</p>
    </div>
  );
};
