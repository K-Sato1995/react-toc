import React from "react";
import { CONTENT } from "./consts";
import Toc from "react-toc";
import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";
import { Card } from "@material-ui/core";
import styled from "styled-components";
import "./design.css";

const App = () => {
  const MainContainer = styled(Card)`
    width: 70%;
    padding: 20px;
    margin: auto;
    margin-top: 2em;
  `;

  return (
    <React.Fragment>
      <Header />
      <MainContainer>
        <h1>Table of contents</h1>
        <Toc markdownText={CONTENT} lowestHeadingLevel={5} />
        <MainContent markdownText={CONTENT} />
      </MainContainer>
      <Footer />
    </React.Fragment>
  );
};

export default App;
