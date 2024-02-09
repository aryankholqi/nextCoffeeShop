import Header from "@/components/modules/Header/Header";
import Comments from "@/components/templates/Testimonial/Comments";
import React from "react";

export default function Testimonial({ data }) {
  return (
    <>
      <Header title={"Testimonial"} />
      <Comments comments={data.comments} />
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:4000/comments");
  const comments = await response.json();

  return {
    props: {
      data: {
        comments,
      },
    },
    revalidate: 60 * 60 * 12,
  };
}
