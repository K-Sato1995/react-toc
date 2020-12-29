// Removes # and connects each word with '-'.
// It also replaces !/? with '-'.
const createLink = (string: string): string => {
  const shapedString = string.toLowerCase().replace(/^#+\s/, '').trimRight()
  const anchor = shapedString.split(' ').join('-').replace(/[?!]/g, '-')
  return anchor
}

// It removes # from the given string. And it shortens the string if its longer than "stringLimit".
const createTitle = (string: string, stringLimit: number): string => {
  const rawTitle = string.replace(/^#+\s/g, '')

  if (rawTitle.length >= stringLimit)
    return `${rawTitle.slice(0, stringLimit)}..`

  return rawTitle
}

// It extracts headings from the given markdownText.
const extractHeadingsFromMd = (
  markdownText: string,
  highestTargetHeadings: number,
  lowestTargetHeadings: number,
): RegExpMatchArray | null => {
  const headingRegex = new RegExp(
    `^#{${highestTargetHeadings},${lowestTargetHeadings}}\\s.+(\\n|\\r|\\r\\n)`,
    'gm',
  )
  return markdownText.match(headingRegex)
}

const removeCodeBlockFromMd = (markdownText: string): string => {
  const codeBlockRegex = new RegExp(
    '((````.+?````)|(```.+?```)|(~~~.+?~~~))\n',
    'gms',
  )
  return markdownText.replace(codeBlockRegex, '')
}

export { createLink, createTitle, extractHeadingsFromMd, removeCodeBlockFromMd }
