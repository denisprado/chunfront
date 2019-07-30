import Layout from "../../components/Layout";
import fetch from "isomorphic-unfetch";
import ReactHtmlParser from "react-html-parser";
import { server } from "../../config";

import { Column } from "../../styles/global";
const Page = ({ page }) => (
  <Layout>
    <div className="row">
      <Column col={3}>{ReactHtmlParser(page.content)}</Column>
      <Column col={5}>
        <img
          className="hero-image"
          src={page.image.url}
          alt={page.content}
          width="100%"
        />
      </Column>
    </div>
  </Layout>
);

Page.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`${server}/pages/${id}`);
  const pages = await res.json();
  const page = pages[0];
  return { page };
};

export default Page;
