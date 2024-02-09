import Header from "@/components/modules/Header/Header";
import { SearchResult } from "@/components/templates/Search/SearchResult";
import React from "react";

export default function Search({ data }) {
  return (
    <>
      <Header title={"Search"} />
      <SearchResult searchResult={data.searchResult} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;

  const response = await fetch("http://localhost:4000/menu");
  const menu = await response.json();

  const searchResult = menu.filter(
    (item) =>
      item.title.toLowerCase().includes(query.q.toLowerCase()) ||
      item.type.toLowerCase().includes(query.q.toLowerCase())
  );

  return {
    props: {
      data: {
        searchResult,
      },
    },
  };
}
