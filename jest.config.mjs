export default {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.js'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '^.+\\.(css|scss|sass|less)$': "identity-obj-proxy", // 서순 주의. 이거 제대로 안하면 @먼저인식한다.
    '^@/(.*)$': '<rootDir>/src/$1',
    // '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/tests/fileMock.js'
  },
  moduleFileExtensions: ['js', 'jsx'],
  
};
