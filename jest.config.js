module.exports = {
  roots: [
    '<rootDir>/src'
  ],
  transform: {
    '^.+\\.[t|j]sx?$': 'ts-jest'
  },
  transformIgnorePatterns: [
    'node_modules'
  ]
}
