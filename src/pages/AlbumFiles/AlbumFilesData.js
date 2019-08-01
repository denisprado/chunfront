import _ from "lodash";
import React from "react";
import AlbumFilesRow from "./AlbumFilesRow";

/*const AlbumFilesData = ({ albumData }) =>
  _(albumData)
    .map(file => <AlbumFilesRow key={file.id} albumFilesRow={file} />)
    .value();*/

const AlbumFilesData = ({ albumData }) => console.log(albumData);

/*  _(albumData)
    .map(file => <AlbumFilesRow key={file.id} albumFilesRow={file} />)
    .value();
*/
export default AlbumFilesData;
