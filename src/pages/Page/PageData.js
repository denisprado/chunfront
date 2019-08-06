import React from "react";
import _ from "lodash";
import PageRow from "./PageRow";

const PageData = ({ pageData }) =>
  _(pageData)
    .map(page => <PageRow key={page.id} pageRow={page} />)
    .value();

export default PageData;
