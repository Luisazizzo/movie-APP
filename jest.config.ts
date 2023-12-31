import type { Config } from "jest";

const config: Config = {
  coveragePathIgnorePatterns: [
    "<rootDir>/src/reportWebVitals.ts",
    "^.*\\index\\.ts[x]?$",
  ],
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.ts?$": "ts-jest",
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "babel-jest",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFilesAfterEnv: [
    "<rootDir>/jest.setup.js",
    "<rootDir>/src/setupTests.ts",
  ],
  collectCoverageFrom: ["<rootDir>/src/**"],
};

export default config;
