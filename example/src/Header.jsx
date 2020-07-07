import React from "react";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";

const Title = styled.h1`
  margin: auto;
  padding: 10px 0;
  width: 80%;
`;

const Header = () => {
  return (
    <AppBar position="static">
      <Title>React Toc</Title>
    </AppBar>
  );
};

export default Header;
