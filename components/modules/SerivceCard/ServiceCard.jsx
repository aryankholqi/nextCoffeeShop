import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import * as Icons from "@fortawesome/free-solid-svg-icons";

export default function ServiceCard({ title, description, img, icon }) {
  return (
    <div className="col-lg-6 mb-5">
      <div className="row align-items-center">
        <div className="col-sm-5">
          <img src={img} alt="" className="img-fluid mb-3 mb-sm-0" />
        </div>
        <div className="col-sm-7">
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
          <p className="m-0">{description}</p>
        </div>
      </div>
    </div>
  );
}
