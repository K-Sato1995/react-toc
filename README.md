
![react-toc](https://user-images.githubusercontent.com/32632542/172038318-d2ff8b26-27f0-4694-9b55-17cfccb9fc7e.png)

<div align='center'>

[![NPM](https://img.shields.io/npm/v/react-toc.svg)](https://www.npmjs.com/package/react-toc)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-toc?color=%2355C503)
![npm](https://img.shields.io/npm/dw/react-toc?color=%23C43737)
![MIT](https://img.shields.io/github/license/K-Sato1995/react-toc?color=%23F6F623)
</div>

## Overview

- The idea is that you can automatically create a customizable table of contents from your markdown text.
- It's regex based. Thus, managed to keep the bundle size pretty tiny.(Check it out on [BUNDLEPHOBIA](https://bundlephobia.com/package/react-toc))


[![Image from Gyazo](https://i.gyazo.com/3e63575305ea5c12e1d52b73a96cdfaa.gif)](https://gyazo.com/3e63575305ea5c12e1d52b73a96cdfaa)

### Demo

[Check out the demo page.](https://react-toc-k-sato1995.vercel.app/)

## Installation

```bash
npm install --save react-toc
```

or

```bash
yarn add react-toc
```

## Usage

Import Toc from the package and pass props to it. As for now, `markdownText` is the only required prop.

```jsx
import React from "react";
import Toc from "react-toc";

const Example = () => {
  const yourMarkdownText = "# test \n your markdown Content # test2\n";
  return <Toc markdownText={yourMarkdownText} />;
};

export default Example;
```

## Props

| Name                 | Type              | Description                                                                   |
| -------------------- | ----------------- | ----------------------------------------------------------------------------- |
| `markdownText`       | string            | **Required** The markdown text you want to creat a TOC from.                  |
| `titleLimit`         | number            | The maximum length of each title in the TOC.                                  |
| `highestHeadingLevel` | number            | The highest level of headings you want to extract from the given markdownText. |
| `lowestHeadingLevel` | number            | The lowest level of headings you want to extract from the given markdownText. |
| `className`          | strig             | Your custom className.                                                        |
| `type`               | "deafult" or"raw" | The type of a TOC you want to use.                                            |
| `customMatchers`     | { [key: string]: string } | The matchers you want to use to replace the letters with.             |

## CustomDesign

### Add a custom className

Pass `className` like the code below.

```jsx
import React from "react";
import Toc from "react-toc";

const Example = () => {
  const yourMarkdownText = "# test \n your markdown Content # test2\n";
  return <Toc markdownText={yourMarkdownText} className={"customClassName"} />;
};

export default Example;
```

### Style the custom class

Now you can style your custom class just like the code below.

```css
.customClassName {
  border: solid 1px;
}
.customClassName > li {
  padding-bottom: 10px;
}
```


## Custom Matchers

You can use the `customMatchers` prop to replace letters in your toc.
For instance, if you want to replace `?` or `!` with `-` in your list, you can simply do this.

```jsx
import React from "react";
import Toc from "react-toc";

const Example = () => {
  const yourMarkdownText = "# test \n your markdown Content # test2\n";
  const matchers = { "[?!]": "-" }

  return <Toc markdownText={yourMarkdownText} className={"customClassName"} customMatchers={matchers}/>;
};

export default Example;
```

You can also give more options to the `customMatchers` prop like the code below.

```jsx
import React from "react";
import Toc from "react-toc";

const Example = () => {
  const yourMarkdownText = "# test \n your markdown Content # test2\n";
  const matchers = { "[?!]": "-", "\\*": "" }

  return <Toc markdownText={yourMarkdownText} className={"customClassName"} customMatchers={matchers}/>;
};

export default Example;
```


## Development

- Install dev dependencies.

```
$ yarn install
```

- Test

```
$ yarn test
```

- Lint

```
$ yarn lint
```

- Run demo locally

```
$ cd demo && yarn && yarn start
```

## License

[MIT](https://github.com/K-Sato1995/react-toc/blob/master/LICENSE)
