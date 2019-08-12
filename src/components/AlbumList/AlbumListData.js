import React from "react";
import _ from "lodash";
import AlbumRow from "./AlbumRow";

const AlbumListData = ({ albumsData }) =>
  _(albumsData)
    .map(albumRow => <AlbumRow key={albumRow.id} albumRow={albumRow} />)
    .value();

export default AlbumListData;
