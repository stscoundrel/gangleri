module.exports = {
  testEnvironment: 'node',
  verbose: true,
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  setupFiles: [
    '<rootDir>/setupTests.ts',
  ],
};
