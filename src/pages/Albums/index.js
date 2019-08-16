import React from "react";
import AlbumList from "../../components/AlbumList";
import { Column, Grid, Row, Section } from "../../styles/components";
import { Container } from "./styles";

export default function Albums() {

  return (
    <Container>
      <Section center>
        <Row col={8} id="albums">
          <Column col={12}>
            <Grid col={3}>
              <AlbumList />
            </Grid>
          </Column>
        </Row>
      </Section>
    </Container>
  );
}
