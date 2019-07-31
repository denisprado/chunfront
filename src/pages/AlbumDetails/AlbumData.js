import React from 'react'
import _ from 'lodash';
import AlbumRow from './AlbumRow'

const AlbumData = ({ albumData }) => (
  _(albumData)
    .map(album => <AlbumRow key={album.id} albumRow={album} />)
    .value()
)

export default AlbumData;