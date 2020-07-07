import React from "react";
import styled from "styled-components";
import { Card } from "@material-ui/core";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";

const Content = styled(Card)`
  width: 70%;
  padding: 20px;
  margin: auto;
`;

interface Props {
  markdownText: string;
}

const flatten = (text, child) => {
  return typeof child === "string"
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text);
};

export const HeadingRenderer = props => {
  var children = React.Children.toArray(props.children);
  var text = children.reduce(flatten, "");
  var slug = text.toLowerCase().replace(/[!?\s]/g, "-");
  return React.createElement(
    "h" + props.level,
    { id: slug, className: "anchor" },
    props.children
  );
};

const MainContent = ({ markdownText }: Props) => {
  return (
    <Content>
      <ReactMarkdown
        source={markdownText}
        renderers={{
          code: CodeBlock,
          heading: HeadingRenderer
        }}
        className="post-content"
      />
    </Content>
  );
};

export default MainContent;
