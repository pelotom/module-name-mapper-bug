const { defaults } = require('jest-config');
// jest.config.js
const { pathsToModuleNameMapper } = require('ts-jest/utils');
// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `compilerOptions.paths` option):
const { compilerOptions } = require('./tsconfig.base.json');

module.exports = {
  ...defaults,

  // moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths /*, { prefix: '<rootDir>/' } */ ),
  moduleNameMapper: {
    '^@nighttrax/(.*)$': '<rootDir>/../$1/src'
  },
  // resolver: 'jest-pnp-resolver',
  restoreMocks: true,
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
};
