module.exports = {
  extends: [
    '@commitlint/config-conventional',
  ],
  rules: {
    'subject-case': [0, 'always'],
    'body-max-line-length': [1, 'always', 100],
  },
}
