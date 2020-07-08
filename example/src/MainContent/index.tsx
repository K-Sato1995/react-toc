import React from "react";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";

interface Props {
  markdownText: string;
}

const flatten = (text: string, child: any): any => {
  return typeof child === "string"
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text);
};

export const HeadingRenderer = (props: any) => {
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
    <React.Fragment>
      <ReactMarkdown
        source={markdownText}
        renderers={{
          code: CodeBlock,
          heading: HeadingRenderer,
        }}
        className="post-content"
      />
    </React.Fragment>
  );
};

export default MainContent;
