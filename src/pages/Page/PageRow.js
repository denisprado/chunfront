import React from "react";
import { Column, Section, Row } from "../../styles/components";
import ReactHtmlParser from "react-html-parser";

export default function Page({ pageRow: page }) {
  return (
    <Section>
      <Row relative id={page.title}>
        <Column col={3} top={3} left={2} absolute>
          {ReactHtmlParser(page.content)}
        </Column>
        <Column col={12}>
          {
            <img
              src={page.image && page.image.url}
              alt={page.image && page.image.path}
              width="100%"
              height="100%"
            />
          }
        </Column>
      </Row>
    </Section>
  );
}
