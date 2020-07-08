import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

interface Props {
  language: string;
  value: string;
}

const CodeBlock = ({ language, value }: Props) => {
  return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>;
};

export default CodeBlock;
