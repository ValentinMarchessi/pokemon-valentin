"use strict";

module.exports = {
  roots: ["<rootDir>/src","<rootDir>/__tests__"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    /* Avoids issues with CSS modules */
    "\\.(css|scss|less)$": "identity-obj-proxy"
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
