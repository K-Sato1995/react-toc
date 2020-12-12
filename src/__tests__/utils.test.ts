import { createLink, createTitle, extractHeadingsFromMd } from "../utils";

describe("createLink", () => {
  it("removes # and connects each word with '-'.", () => {
    expect(createLink("# Test Heading  ")).toEqual("test-heading");
    expect(createLink("## This is a test heading")).toEqual(
      "this-is-a-test-heading"
    );
  });

  it("it replaces /!/? with -", () => {
    expect(createLink("### Test?")).toEqual("test-");
  });
});

describe("createTitle", () => {
  it("removes #.", () => {
    expect(createTitle("# Test Heading", 100)).toEqual("Test Heading");
  });

  it("shortens the string", () => {
    expect(createTitle("# Test Heading", 6)).toEqual("Test H..");
  });
});

describe("extractHeadingsFromMd", () => {
  const markdownText = `
# Heading1
  This is the first paragraph.
## Heading2
  This is the second paragraph.
### Heading3
  This is the third paragraph.
  `;

  it("It extracts headings from the given markdownText.", () => {
    expect(extractHeadingsFromMd(markdownText, 1, 3)).toEqual([
      "# Heading1\n",
      "## Heading2\n",
      "### Heading3\n"
    ]);
  });

  it("It extracts headings from the given markdownText.", () => {
    expect(extractHeadingsFromMd(markdownText, 1, 2)).toEqual([
      "# Heading1\n",
      "## Heading2\n"
    ]);
  });

  it("It extracts headings from the given markdownText.", () => {
    expect(extractHeadingsFromMd(markdownText, 2, 3)).toEqual([
      "## Heading2\n",
      "### Heading3\n"
    ]);
  });

  it("It extracts headings from the given markdownText.", () => {
    expect(extractHeadingsFromMd(markdownText, 2, 2)).toEqual([
      "## Heading2\n"
    ]);
  });
});
