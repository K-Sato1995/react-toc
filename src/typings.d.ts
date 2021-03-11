/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

interface SvgrComponent
  extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}
  
declare module "*.svg" {
  const svgUrl: string;
  const svgComponent: SvgrComponent;
  export default svgUrl;
  export { svgComponent as ReactComponent };
}

type CustomMatchers  = { [key: string]: string }

interface TocProps {
  /*
    The markdown text you want to creat a TOC from.
   */
  markdownText: string
  /*
    The maximum length of each title in the TOC.
  */
  titleLimit?: number | undefined
  /*
    The highest level of headings you want to extract from the given markdownText.
  */
  highestHeadingLevel?: number
  /*
    The lowest level of headings you want to extract from the given markdownText.
  */
  lowestHeadingLevel?: number
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
  className?: string
  /*
    The type of a TOC you want to use.
  */
  type?: 'default' | 'raw' // "fixed-left" | "fixed-right" | "material" | "bootstrap"
}
