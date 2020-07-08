import React from "react";
import { CONTENT } from "./consts";
import Toc from "react-toc";
import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";
import "./design.css";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Toc markdownText={CONTENT} lowestHeadingLevel={5} />
      <MainContent markdownText={CONTENT} />
      <Footer />
    </React.Fragment>
  );
};

export default App;
