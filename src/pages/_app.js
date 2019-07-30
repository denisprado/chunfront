import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";

export default class BlogApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  renderHead() {
    return (
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css?family=Exo+2:100,100i,200,200i,400,400i,600,600i,700,700"
          rel="stylesheet"
        />
      </Head>
    );
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        {this.renderHead()}
        <Component {...pageProps} />
      </Container>
    );
  }
}
