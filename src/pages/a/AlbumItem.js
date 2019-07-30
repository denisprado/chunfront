import Link from "next/link";

const AlbumItem = ({ albumItem }) => (
  <Link key={albumItem.id} href={`/f/${albumItem.id}`}>
    <img
      className="hero-image"
      src={albumItem.url}
      alt={albumItem.title}
      width="100%"
    />
  </Link>
);

export default AlbumItem;
