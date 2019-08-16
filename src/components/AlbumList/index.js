import React from "react";
import { useSelector } from 'react-redux'
import AlbumListData from './AlbumListData'
// import { Container } from './styles';

export default function AlbumList() {

  const albums = useSelector(state => state.albums.data)

  return (
    <AlbumListData albumsData={albums} />
  );
}
