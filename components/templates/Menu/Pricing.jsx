import ProductCard from "@/components/modules/ProductCard/ProductCard";
import React from "react";

export default function Pricing({ menu }) {
  return (
    <div class="container-fluid pt-5">
      <div class="container">
        <div class="section-title">
          <h4 class="text-primary text-uppercase" style={{ letterSpacing: 5 }}>
            Menu & Pricing
          </h4>
          <h1 class="display-4">Competitive Pricing</h1>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <h1 class="mb-5">Hot Coffee</h1>
            {menu
              .filter((item) => item.type === "hot")
              .slice(0, 3)
              .map((item) => (
                <ProductCard item={item} />
              ))}
          </div>
          <div class="col-lg-6">
            <h1 class="mb-5">Cold Coffee</h1>
            {menu
              .filter((item) => item.type === "cold")
              .slice(0, 3)
              .map((item) => (
                <ProductCard item={item} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
