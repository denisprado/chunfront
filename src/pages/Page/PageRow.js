import React, { Component } from "react";
import { Column, Section, Row } from "../../styles/components";
import ReactHtmlParser from "react-html-parser";

export default class Page extends Component {
  render() {
    const { pageRow } = this.props;
    const { image } = pageRow;

    return (
      <Section>
        <Row relative id={pageRow.title}>
          <Column col={3} top={3} left={2} absolute>
            {ReactHtmlParser(pageRow.content)}
          </Column>
          <Column col={12} bgImg={image.url} />
        </Row>
      </Section>
    );
  }
}
