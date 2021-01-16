import * as React from 'react'
import Toc from '../index'
import renderer from 'react-test-renderer'

const markdownText = `
# Heading1
This is a test sentence.

## Heading2
This is a test sentence.

### Heading3
This is a test sentence.
`

describe('<Toc/>', () => {
  it('returns null if the markdownText dose not exist', () => {
    const component = renderer.create(<Toc markdownText={''} />)
    const tree = component.toJSON()

    expect(tree).toBe(null)
  })

  it('renders properly', () => {
    const component = renderer.create(<Toc markdownText={markdownText} />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders properly with titleLimit option', () => {
    const component = renderer.create(
      <Toc markdownText={markdownText} titleLimit={3} />,
    )
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders properly with lowestHeadingLevel option', () => {
    const component = renderer.create(
      <Toc markdownText={markdownText} titleLimit={3} lowestHeadingLevel={4} />,
    )
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders properly with className option', () => {
    const component = renderer.create(
      <Toc
        markdownText={markdownText}
        titleLimit={3}
        lowestHeadingLevel={4}
        className={'customClassName'}
      />,
    )
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders properly with type option', () => {
    const component = renderer.create(
      <Toc
        markdownText={markdownText}
        titleLimit={3}
        lowestHeadingLevel={4}
        className={'customClassName'}
        type="raw"
      />,
    )
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
