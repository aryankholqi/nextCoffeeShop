import ProductsDetails from "@/components/templates/Product/ProductDetails";
import Comments from "@/components/templates/Testimonial/Comments";
import { useRouter } from "next/router";
import React from "react";

export default function ProductDetail({ data }) {
  const router = useRouter();
  return (
    <>
      <ProductsDetails product={data.product} />
      {/* <Comments /> */}
    </>
  );
}

export async function getStaticPaths() {
  const response = await fetch(`http://localhost:4000/menu`);
  const products = await response.json();

  const paths = products.map((product) => ({
    params: { productId: String(product.id) },
  }));

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const { params } = context;

  const response = await fetch(
    `http://localhost:4000/menu/${params.productId}`
  );
  const product = await response.json();

  return {
    props: {
      data: {
        product,
      },
    },
    revalidate: 60 * 60 * 12,
  };
}
