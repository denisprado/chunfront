import React from 'react'
import { Column, Container, Content, Row, Grid } from '../../styles/components';
import ReactHtmlParser from 'react-html-parser';

const PageRow = ({ pageRow }) => (
  <Container>
    <Content>
      <Row key={pageRow.id}>
        <Column col={2}>{ReactHtmlParser(pageRow.content)}</Column>
        <Column col={6}>{<img src={pageRow.image.url} alt={pageRow.image.path} width='100%' />}</Column>
      </Row>
    </Content>
  </Container>
)

export default PageRow;