// let aliases = require('./config/aliases');
const aliases = Object.entries(require('./config/aliases')).reduce((memo, [key, path]) => {
  memo[`^${key}(.*)$`] = `<rootDir>/src${path.split('src')[1]}/$1`;
  return memo;
}, {});

module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx}'
  ],
  resolver: 'jest-pnp-resolver',
  setupFiles: [
    'react-app-polyfill/jsdom'
  ],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx}',
    '<rootDir>/src/**/?(*.)(spec|test).{js,jsx}'
  ],
  testEnvironment: 'jsdom',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|css|json)$)': '<rootDir>/config/jest/fileTransform.js'
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$',
    '^.+\\.module\\.(css|sass|scss)$'
  ],
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    ...aliases
  },
  moduleFileExtensions: [
    'web.js',
    'js',
    'json',
    'web.jsx',
    'jsx',
    'node'
  ]
};
console.log(module.exports.moduleNameMapper)
