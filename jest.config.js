module.exports = {
  preset: 'innet-jest',
  testEnvironment: 'jsdom',
  setupFiles: ['core-js'],
  "transform": {
    "^.+\\.scss$": "<rootDir>/node_modules/jest-scss-transform"
  }
}
