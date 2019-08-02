import React from "react";
import _ from "lodash";
import PageRow from "./PageRow";

const PageData = ({ pageData }) => (
  <PageRow key={pageData.id} pageRow={pageData} />
);

export default PageData;
