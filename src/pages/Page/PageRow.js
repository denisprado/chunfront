import React, { Component } from "react";
import { Column, Section, Row, Grid } from "../../styles/components";
import ReactHtmlParser from "react-html-parser";
import ContactForm from "../../components/ContactForm";
import AlbumList from "../../components/AlbumList";

export default class Page extends Component {
  render() {
    const { pageRow } = this.props;
    const { image } = pageRow;
    return (
      <Section>
        <Row relative id={pageRow.title}>
          <Column col={12} bgImg={image.url} />

          {pageRow.title === "contact" ? (
            <>
              <ContactForm />
            </>
          ) : pageRow.title === "portifolio" ? (
            <>
              <Column col={8} left={2} absolute>
                <Section center>
                  <Grid col={3}>
                    <AlbumList />
                  </Grid>
                </Section>
              </Column>
            </>
          ) : (
            <>
              <Column col={3} top={3} left={2} absolute>
                {ReactHtmlParser(pageRow.content)}
              </Column>
            </>
          )}
        </Row>
      </Section>
    );
  }
}

// import React, { Component } from "react";
// import { Column, Section, Row } from "../../styles/components";
// import ReactHtmlParser from "react-html-parser";
// import ContactForm from "../../components/ContactForm";

// export default class Page extends Component {
//   render() {
//     const { pageRow } = this.props;
//     const { image } = pageRow;

//     return (
//       <Section>
//         <Row relative id={pageRow.title}>
//           <Column col={3} top={3} left={2} absolute>
//             {ReactHtmlParser(pageRow.content)}
//           </Column>

//           <Column col={12} bgImg={image.url} />
//         </Row>
//       </Section>
//     );
//   }
// }
