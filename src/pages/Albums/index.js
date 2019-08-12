import React from "react";
import { useSelector } from "react-redux";
import { Spring } from "react-spring/renderprops";
import AlbumList from "../../components/AlbumList";
import Routes from "../../routes";
import { Column, Grid, Row, Section } from "../../styles/components";
import { Container } from "./styles";

export default function Albums() {
  const isOpen = useSelector(state => state.albums.open);

  return (
    <>
      <Container>
        <Section center>
          <Row col={6} id="albums">
            <Column col={12}>
              <Grid col={2}>
                <AlbumList />
              </Grid>
            </Column>
          </Row>
        </Section>
      </Container>
    </>
  );
}
