import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import ReactHtmlParser from "react-html-parser";
import { server } from "../config";

import { Column } from "../styles/global";

const Home = ({ pages }) => (
  <Layout pages={pages}>
    <div className="row">
      {pages.map(page => {
        <Page page={page} />;
      })}
    </div>
  </Layout>
);

const Page = ({ page }) => {
  <>
    <Column col={5}>{ReactHtmlParser(page.content)}</Column>
    <Column col={5}>
      {page.image
        ? page.image.map(image => {
            <img
              className="hero-image"
              src={`${server}/${image.path}`}
              alt={page.content}
              width="100%"
            />;
          })
        : null}
    </Column>
  </>;
};

Home.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`${server}/pages`);
  const pages = await res.json();

  return { pages };
};

export default Home;
