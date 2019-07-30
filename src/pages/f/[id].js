import Layout from "../../components/Layout";
import fetch from "isomorphic-unfetch";
import { server } from "../../config";
import { Column } from "../../styles/global";
const File = ({ file }) => (
  <Layout>
    <div className="row">
      {file ? (
        <Column col={8}>
          <img
            className="hero-image"
            src={file.url}
            alt={file.name}
            width="100%"
          />
        </Column>
      ) : null}
    </div>
  </Layout>
);

File.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`${server}/files/${id}`);
  const files = await res.json();
  const file = files[0];
  return { file };
};

export default File;
