module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "**/src/services/*.{js,ts}",
    "!**/node_modules/**",
    "!**/tests/**",
  ],
};
