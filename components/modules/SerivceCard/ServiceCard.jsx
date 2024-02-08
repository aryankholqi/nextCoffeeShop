import Image from "next/image";
import React from "react";

export default function ServiceCard({ title, description, image, icon }) {
  return (
    <div class="col-lg-6 mb-5">
      <div class="row align-items-center">
        <div class="col-sm-5">
          <Image src={image} className="img-fluid mb-3 mb-sm-0" />
        </div>
        <div class="col-sm-7">
          <h4 style={{ display: "flex", alignItems: "baseline" }}>
            <div
              style={{
                backgroundColor: "#da9f5b",
                borderRadius: "100%",
                height: 35,
                width: 40,
                textAlign: "center",
              }}
            >
              {icon}
            </div>
            <p className="ml-3">{title}</p>
          </h4>
          <p class="m-0">{description}</p>
        </div>
      </div>
    </div>
  );
}
