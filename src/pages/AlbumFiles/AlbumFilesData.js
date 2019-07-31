import React from 'react'
import _ from 'lodash';
import AlbumFilesRow from './AlbumFilesRow'

const AlbumFilesData = ({ albumData }) => (
  _(albumData)
    .map(file => <AlbumFilesRow key={file.id} albumFilesRow={file} />)
    .value()
)

export default AlbumFilesData;