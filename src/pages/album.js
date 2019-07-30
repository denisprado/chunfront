import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import { server } from "../config";
import { Grid } from "../styles/global";

const Albums = ({ albums }) => (
  <Layout>
    <Grid col={4}>
      {albums
        ? albums.map(album => (
            <Link key={album.id} href={`/a/${album.id}`}>
              <div>
                {album.Files.map(file => {
                  <img
                    className="hero-image"
                    src={`${server}/files/${file.url}`}
                    alt={album.title}
                    width="100%"
                  />;
                })}
              </div>
            </Link>
          ))
        : null}
    </Grid>
  </Layout>
);

Albums.getInitialProps = async function(context) {
  const res = await fetch(`${server}/albums`);
  const albums = await res.json();

  return { albums };
};

export default Albums;
