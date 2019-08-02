import React, { Component } from "react";
import { Column, Container, Content, Row } from "../../styles/components";
import ReactHtmlParser from "react-html-parser";

// import { Container } from './styles';

export default class Page extends Component {
  render() {
    const { pageRow } = this.props;
    const { image } = pageRow;

    return (
      <Container>
        <Content>
          <Row key={pageRow.id}>
            <Column col={2}>{ReactHtmlParser(pageRow.content)}</Column>
            <Column col={6}>
              {
                <img
                  src={image && image.url}
                  alt={image && image.path}
                  width="100%"
                />
              }
            </Column>
          </Row>
        </Content>
      </Container>
    );
  }
}
