module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\js$": "babel-jest",
    '.+\\.(css|style|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  snapshotSerializers: ['jest-serializer-vue'],
  coverageReporters: [
    'json-summary',
    'lcov'
  ],
}