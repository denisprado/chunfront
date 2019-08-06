import React, { Component } from "react";
import { Column, Section, Row } from "../../styles/components";
import ReactHtmlParser from "react-html-parser";

// import { Container } from './styles';

export default class Page extends Component {
  render() {
    const { pageRow } = this.props;
    const { image } = pageRow;

    return (
      <Section>

        <Row relative id={pageRow.title}>
          <Column col={3} absolute>
            {ReactHtmlParser(pageRow.content)}
          </Column>
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
      </Section>
    );
  }
}
