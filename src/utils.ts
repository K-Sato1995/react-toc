const createLink = (string: string): string => {
  const shapedString = string
    .toLowerCase()
    .replace(/#+\s/, "")
    .trimRight();
  const anchor = shapedString
    .split(" ")
    .join("-")
    .replace(/[?!]/g, "-");
  return anchor;
};

const createTitle = (string: string, stringLimit: number) => {
  const rawTitle = string.replace(/#+\s/g, "");

  if (rawTitle.length >= stringLimit)
    return `${rawTitle.slice(0, stringLimit)}..`;

  return rawTitle;
};

const extractHeadingsFromMd = (
  markdownText: string,
  numberOftargetHeadings: number
) => {
  const headingRegex = new RegExp(
    `^#{1,${numberOftargetHeadings}}\\s.+\\n`,
    "gm"
  );
  return markdownText.match(headingRegex);
};

export { createLink, createTitle, extractHeadingsFromMd };
