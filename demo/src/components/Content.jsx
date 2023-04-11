import '../styles/Content.css';
import React from "react";
import { CONTENT as mdContent } from '../consts'
import Toc from "@sak1sham/react-toc-highlight";
import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'

import {vscDarkPlus} from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const flatten = (text, child) => {
    return typeof child === "string"
      ? text + child
      : React.Children.toArray(child.props.children).reduce(flatten, text);
  };

export const HeadingRenderer = (props) => {
    var children = React.Children.toArray(props.children);
    var text = children.reduce(flatten, "");
    var slug = text.toLowerCase().replace(/[!?\s]/g, "-");
    return React.createElement(
        "h" + props.level,
        { id: slug, className: "anchor" },
        props.children
    );
};
  
const Content = () => {
    return (
        <div className='content-container'>
            <h1>Table of contents</h1>
            <Toc markdownText={mdContent}  className={"toc"} highlightId='overview'/>

            <ReactMarkdown
                children={mdContent}
                remarkPlugins={[remarkGfm]}
                className="post-content"
                components={{
                    code({node, inline, className, children, ...props}) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                        <SyntaxHighlighter
                            children={String(children).replace(/\n$/, '')}
                            style={vscDarkPlus}
                            language={match[1]}
                            PreTag="div"
                            {...props}
                        />
                        ) : (
                        <code className={className} {...props}>
                            {children}
                        </code>
                        )
                    },
                    h1: HeadingRenderer,
                    h2: HeadingRenderer,
                }}
            />
        </div>
    )
};

export default Content;
