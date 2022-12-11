/* eslint-disable no-warning-comments */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 100],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'build', // build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
        'chore', // chore: Other changes that don't modify src or test files
        'ci', // ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
        'docs', // docs: Documentation only changes
        'feat', // feat: A new feature
        'fix', // fix: A bug fix
        'perf', // perf: A code change that improves performance
        'refactor', // refactor: A code change that neither fixes a bug nor adds a feature
        'revert', // revert: Reverts a previous commit
        'security', // security: A code change that improves security
        'style', // style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, tc)
        'test', // test: Adding missing tests or correcting existing tests
        'translation', // translation: Adding missing translations or correcting existing translations
      ],
    ],
  },
};
