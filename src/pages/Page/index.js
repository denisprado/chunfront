import React from "react";
import { useSelector } from "react-redux";
import PageData from "./PageData";

export default function Page() {
  const pages = useSelector(state => state.pages.data);

  return <PageData pageData={pages} />;
}
