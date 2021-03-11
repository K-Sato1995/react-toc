// Replaces all the specified letters
const replaceAll = (retStr: string, renderers: CustomRenderers) => {
  for (const key in renderers) {
    retStr = retStr.replace(new RegExp(key, 'g'), renderers[key])
  }
  return retStr
}

// Removes # and connects each word with '-'.
// It also replaces !/? with '-'.
const createLink = (
  string: string,
  customRenderers: CustomRenderers,
): string => {
  const shapedString = string.toLowerCase().replace(/^#+\s/, '').trimRight()
  const anchor = shapedString.split(' ').join('-').replace(/[?!]/g, '-')
  return replaceAll(anchor, customRenderers)
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
    '((````[a-z]*\n[\\s\\S]*?\n````)|(```[a-z]*\n[\\s\\S]*?\n```)|(~~~[a-z]*\n[\\s\\S]*?\n~~~))',
    'gms',
  )
  return markdownText.replace(codeBlockRegex, '')
}

export { createLink, createTitle, extractHeadingsFromMd, removeCodeBlockFromMd }
