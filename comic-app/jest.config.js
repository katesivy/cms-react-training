module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: "node",
  globals: {
      'ts-jest': {
          tsconfig: './tsconfig.test.json'
      },
      'expect': true,
      'test': true,
      "bail": 1,
      "verbose": true,
      },
  transformIgnorePatterns: [
      "node_modules",
      // ['<rootDir>/node_modules/'],
  ],
  transform: {
    '^.+\\.(ts|tsx)?$': ['ts-jest', { tsconfig: './tsconfig.test.json' }],
    "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
    "\\.[jt]sx?$": "babel-jest",
    // '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
    // '<rootDir>/fileTransformer.js',
    // <transform_regex>: ['ts-jest', { /* ts-jest config goes here in Jest */ }]
  },
}

// module.exports = {
//     transform: {
//       '^.+\\.(ts|tsx)?$': 'ts-jest',
//       "^.+\\.(js|jsx)$": "babel-jest",
//     }
//   };