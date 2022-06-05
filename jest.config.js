module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  testPathIgnorePatterns: ["/lib/", "/node_modules/", "/dist/", "/demo/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  testURL: "http://localhost/",
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  coverageReporters: ["json", "lcovonly", "text", "clover"],
  bail: true,
  collectCoverage: true,
};
