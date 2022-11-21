module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: "node",
  globals: {
      'ts-jest': {
          tsconfig: './tsconfig.test.json'
      },
      'expect': true,
      'test': true
      },
  transformIgnorePatterns: [
      "node_modules",
  ],
  transform: {
    '^.+\\.(ts|tsx)?$': ['ts-jest', { tsconfig: './tsconfig.test.json' }],
    "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
    // <transform_regex>: ['ts-jest', { /* ts-jest config goes here in Jest */ }]
  },
}

// module.exports = {
//     transform: {
//       '^.+\\.(ts|tsx)?$': 'ts-jest',
//       "^.+\\.(js|jsx)$": "babel-jest",
//     }
//   };