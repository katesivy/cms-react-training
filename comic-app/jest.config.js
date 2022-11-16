module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: "node",
  globals: {
      'ts-jest': {
          tsconfig: '<rootDir>/test/tsconfig.json',
      },
  },
  transformIgnorePatterns: [
      "node_modules",
  ],
}

// module.exports = {
//     transform: {
//       '^.+\\.(ts|tsx)?$': 'ts-jest',
//       "^.+\\.(js|jsx)$": "babel-jest",
//     }
//   };