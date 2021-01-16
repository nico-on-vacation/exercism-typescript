module.exports = {
  verbose: true,
  projects: ['src/'],
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/test/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
  ],
  testPathIgnorePatterns: [
    '/(?:production_)?node_modules/',
    '.d.ts$',
    '<rootDir>/test/fixtures',
    '<rootDir>/test/helpers',
    '__mocks__',
  ],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
}
