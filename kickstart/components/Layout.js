import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import Head from "next/head";
import Header from "./Header";

class Layout extends Component {
  render() {
    return (
      <Container>
        <Head>
          <link
            async
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
          />
          <script
            async
            src="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1//dist/semantic.min.js"
          ></script>
        </Head>

        <Header />
        {this.props.children}
      </Container>
    );
  }
}

export default Layout;
