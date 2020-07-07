import React from "react";
import styled from "styled-components";
import { BottomNavigation } from "@material-ui/core";

const BottomNav = styled(BottomNavigation)`
  height: 500px;
  margin-top: 50px;
  padding: 10px;
  border-top: solid 1px;
  background-color: #3f51b5;
`;

const Footer = () => {
  return <BottomNav>React Toc</BottomNav>;
};

export default Footer;
