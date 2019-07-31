import React from 'react'
import { Column, Container, Content, Row, Grid } from '../../styles/components';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom'


const AlbumRow = ({ albumRow }) => (
  <Container>
    <Content>
      <Row key={albumRow.id}>
        <Column col={1}>
          <img
            src={albumRow.thumbImage.url}
            alt={albumRow.thumbImage.path}
            width='100%'
          />
          {ReactHtmlParser(albumRow.title)}
        </Column>
        <Column col={7}>
          <Grid col={4}>
            {albumRow.Files.map(file => (
              <Link to={`/albums/${albumRow.id}/files/${file.id}`} key={file.id} >
                <img src={file.url} alt={file.path} width="100%" />
              </Link>
            ))}
          </Grid>
        </Column>
      </Row>
    </Content>
  </Container>
)

export default AlbumRow;