import React from 'react'
import _ from 'lodash';
import AlbumRow from './AlbumRow'
// import { Container } from './styles';

export default function AlbumListData({ albumsData }) {
  return(

    _(albumsData)
    .map(albumRow => (
      <AlbumRow album={albumRow} key={albumRow.id} />
      )).value()
      )
}
