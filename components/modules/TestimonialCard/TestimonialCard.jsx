import React from "react";

export const TestimonialCard = ({ item }) => {
  return (
    <div className="testimonial-item">
      <div className="d-flex align-items-center mb-3">
        <img className="img-fluid" src={item.profile} alt="" />
        <div className="ml-3">
          <h4>{item.username}</h4>
          <i>User</i>
        </div>
      </div>
      <p className="m-0">{item.body}</p>
    </div>
  );
};
