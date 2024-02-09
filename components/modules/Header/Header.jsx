import React from "react";
import Link from "next/link";
export default function Header({ title }) {
  return (
    <div class="container-fluid page-header mb-5 position-relative overlay-bottom">
      <div
        class="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5"
        style={{ minHeight: 400 }}
      >
        <h1 class="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase">
          {title}
        </h1>
        <div class="d-inline-flex mb-lg-5">
          <p class="m-0 text-white">
            <Link className="text-white" href={"/"}>
              Home
            </Link>
          </p>
          <p class="m-0 text-white px-2">/</p>
          <p class="m-0 text-white">{title}</p>
        </div>
      </div>
    </div>
  );
}
