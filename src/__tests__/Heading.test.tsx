import Heading, { newHeading } from '../Heading'
import renderer from 'react-test-renderer'

describe('newHeading', () => {
  const createdObject = newHeading('## Test Heading  ', 50)
  it('Create a new heading object.', () => {
    expect(createdObject instanceof Heading).toBeTruthy()
  })

  it('Create a new heading object from the given string', () => {
    expect(createdObject).toEqual({
      level: 2,
      title: '## Test Heading  ',
      titleLimit: 50,
      customMatchers: {},
    })
  })

  it('returns null when there is no # in the given string', () => {
    expect(newHeading('Test Heading  ', 50)).toBeNull()
  })
})

describe('generateList', () => {
  it('renders in with a heading1', () => {
    const headingObj = new Heading('# this is the title', 1, 100)
    const component = renderer.create(headingObj.generateList())
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders in with a heading2', () => {
    const headingObj = new Heading('## this is the title', 2, 100)
    const component = renderer.create(headingObj.generateList())
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders in with a heading3', () => {
    const headingObj = new Heading('### this is the title', 3, 100)
    const component = renderer.create(headingObj.generateList())
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders in with a heading4', () => {
    const headingObj = new Heading('#### this is the title', 4, 100)
    const component = renderer.create(headingObj.generateList())
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders in with a heading5', () => {
    const headingObj = new Heading('##### this is the title', 5, 100)
    const component = renderer.create(headingObj.generateList())
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders in with a heading6', () => {
    const headingObj = new Heading('###### this is the title', 6, 100)
    const component = renderer.create(headingObj.generateList())
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  it("renders the listItem when the given heading's level is over 6", () => {
    const headingObj = new Heading('####### this is the title', 7, 100)
    const component = renderer.create(headingObj.generateList())
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
