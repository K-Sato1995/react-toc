import * as React from 'react'
import { replaceAll, createLink, createTitle } from './utils'

export default class Heading {
  title: string
  level: number
  titleLimit: number
  customMatchers: CustomMatchers

  constructor(
    title: string,
    level: number,
    titleLimit: number,
    customMatchers?: CustomMatchers,
  ) {
    this.title = title
    this.level = level
    this.titleLimit = titleLimit
    this.customMatchers = customMatchers ? customMatchers : {}
  }

  generateList(): JSX.Element {
    const link = createLink(this.title)
    const listItem = (
      <li>
        <a href={`#${replaceAll(link, this.customMatchers)}`}>
          {createTitle(this.title, this.titleLimit)}
        </a>
      </li>
    )

    return <>{nestUl(this.level, listItem)}</>
  }
}

/*
 Create a new heading object from the given string
*/
const newHeading = (
  headingText: string,
  titleLimit: number,
  customMatchers?: CustomMatchers,
): Heading | null => {
  const matchedHashes = headingText.match(/^#+/)
  if (!matchedHashes) return null
  const headingLevel: number = matchedHashes[0].split('').length
  const matchers = customMatchers ? customMatchers : {}

  return new Heading(headingText, headingLevel, titleLimit, matchers)
}

/* 
 Return a nested Unordered list based on the given heading level.
*/
const nestUl = (level: number, listItem: React.ReactNode) => {
  switch (level) {
    case 1:
      return listItem
    case 2:
      return <ul>{listItem}</ul>
    case 3:
      return (
        <ul>
          <ul>{listItem}</ul>
        </ul>
      )
    case 4:
      return (
        <ul>
          <ul>
            <ul>{listItem}</ul>
          </ul>
        </ul>
      )
    case 5:
      return (
        <ul>
          <ul>
            <ul>
              <ul>{listItem}</ul>
            </ul>
          </ul>
        </ul>
      )
    case 6:
      return (
        <ul>
          <ul>
            <ul>
              <ul>
                <ul>{listItem}</ul>
              </ul>
            </ul>
          </ul>
        </ul>
      )
    default:
      return listItem
  }
}

export { newHeading }
