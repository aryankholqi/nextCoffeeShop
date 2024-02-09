import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import * as Icons from "@fortawesome/free-solid-svg-icons";

export default function ServiceCard({ title, description, image, icon }) {
  return (
    <div class="col-lg-6 mb-5">
      <div class="row align-items-center">
        <div class="col-sm-5">
          <img src={image} alt="" className="img-fluid mb-3 mb-sm-0" />
        </div>
        <div class="col-sm-7">
          <h4 style={{ display: "flex", alignItems: "baseline" }}>
            <div
              style={{
                backgroundColor: "#da9f5b",
                borderRadius: "100%",
                height: 40,
                width: 40,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon icon={Icons[icon]} />
            </div>
            <p className="ml-3">{title}</p>
          </h4>
          <p class="m-0">{description}</p>
        </div>
      </div>
    </div>
  );
}
