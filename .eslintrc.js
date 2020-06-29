module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: 'eslint:recommended',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    COMPAT: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {},

  overrides: [
    {
      files: ['**/test.[jt]s?(x)', '**/*.test.[jt]s?(x)'],
      globals: {
        window: true,
        document: true,
      },
      env: {
        node: true,
        commonjs: true,
        es6: true,
        jest: true,
      },
    },
  ],
};
