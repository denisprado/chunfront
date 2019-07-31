import React from 'react';
import { Column, Container, Content, Row } from '../../styles/components';


const AlbumRow = ({ albumFilesRow }) => (
  <Container>
    <Content>
      <Row key={albumFilesRow.id}>
        <Column col={8}>
          <img
            src={albumFilesRow.url}
            alt={albumFilesRow.path}
            width='100%'
          />
        </Column>
      </Row>
    </Content>
  </Container>
)

export default AlbumRow;