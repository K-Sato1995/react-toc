import * as React from "react";
import styles from "./styles.module.css";
import { extractHeadingsFromMd } from "./utils";
import Heading, { newHeading } from "./Heading";

interface Props {
  /*
    The markdown text you want to creat a TOC from.
   */
  markdownText: string;
  /*
    The maximum length of each title in the TOC.
  */
  titleLimit?: number;
  /*
    The lowest level of headings you want to extract from the given markdownText.
  */
  lowestHeadingLevel?: number;
  /*
    The custom className.
    You can style the TOC like this.

    ```css
    .customClassName  {
      border: solid 1px;
    }
    .customClassName > li {
      padding-bottom: 10px;
    }
    ```
  */
  className?: string;
  /*
    The type of a TOC you want to use.
  */
  type?: "default" | "raw"; // "fixed-left" | "fixed-right" | "material" | "bootstrap"
}

const Toc = ({
  markdownText,
  titleLimit,
  lowestHeadingLevel,
  className,
  type
}: Props) => {
  // Set default values
  const limit = titleLimit ? titleLimit : 200;
  const defaultClass = type === "raw" ? "" : "react-toc";
  const customClass = className || defaultClass;
  const headingLevel: number = lowestHeadingLevel || 6;

  // Style settings
  const style: string | undefined = styles[customClass] || className;

  // Mutate headings
  const matchedHeadings: RegExpMatchArray | null = extractHeadingsFromMd(
    markdownText,
    headingLevel
  );
  const headingObjects = matchedHeadings?.map(heading =>
    newHeading(heading, limit)
  );
  const headingTags:
    | JSX.Element[]
    | undefined = headingObjects?.map((heading: Heading) =>
    heading.generateList()
  );

  if (!headingTags) return null;

  return (
    <ul className={style}>
      {headingTags.map((heading: JSX.Element, index: number) => (
        <React.Fragment key={index}>{heading}</React.Fragment>
      ))}
    </ul>
  );
};

export default Toc;
