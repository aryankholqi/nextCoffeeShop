import Header from "@/components/modules/Header/Header";
import ServicesDetails from "@/components/templates/Services/ServicesDetails";
import React from "react";

export default function Services({ data }) {
  return (
    <>
      <Header route={"Services"} title={"Services"} />
      <ServicesDetails services={data.services} />
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:4000/services");
  const services = await response.json();

  return {
    props: {
      data: {
        services,
      },
    },
  };
}
