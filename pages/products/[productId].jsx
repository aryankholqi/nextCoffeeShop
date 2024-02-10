import Comments from "@/components/templates/Product/Comments";
import ProductsDetails from "@/components/templates/Product/ProductDetails";
import React from "react";

export default function ProductDetail({ data }) {
  return (
    <>
      <ProductsDetails product={data.product} />
      <Comments comments={data.comments} />
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

  const productResponse = await fetch(
    `http://localhost:4000/menu/${params.productId}`
  );
  const product = await productResponse.json();

  const commentsResponse = await fetch(
    `http://localhost:4000/comments?productID=${params.productId}`
  );
  const comments = await commentsResponse.json();

  return {
    props: {
      data: {
        product,
        comments,
      },
    },
    revalidate: 60 * 60 * 12,
  };
}
