import _ from "lodash";
import AlbumItem from "./AlbumItem";

const AlbumData = ({ albumData }) =>
  _(albumData.Files)
    .map(photo => <AlbumItem key={photo.id} albumItem={photo} />)
    .value();

export default AlbumData;
