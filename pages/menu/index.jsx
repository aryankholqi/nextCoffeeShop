import Header from "@/components/modules/Header/Header";
import Pricing from "@/components/templates/Menu/Pricing";
import React from "react";

export default function Menu({ data }) {
  return (
    <>
      <Header title={"Menu"} />
      <Pricing menu={data.menu} />
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:4000/menu");
  const menu = await response.json();

  return {
    props: {
      data: {
        menu,
      },
    },
    revalidate: 60 * 60 * 12,
  };
}
