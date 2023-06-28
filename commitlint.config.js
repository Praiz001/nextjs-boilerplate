// 'build': Commit related to build system or configuration changes.
// 'chore': General maintenance or housekeeping tasks.
// 'ci': Commit related to Continuous Integration (CI) configuration or scripts.
// 'docs': Documentation-related changes or additions.
// 'feat': New feature implementation or enhancement.
// 'fix': Bug fixes or error corrections.
// 'perf': Performance optimization or improvements.
// 'refactor': Code refactoring without changing the functionality.
// 'revert': Reverting previous commits or changes.
// 'style': Code style changes (e.g., formatting, indentation) without functional impact.
// 'test': Additions or modifications to test cases or test-related code.
// 'translation': Changes related to translations or localization.
// 'security': Security-related changes or fixes.
// 'changeset': Changes related to the management of changesets (e.g., automated release notes).

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 100],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'translation',
        'security',
        'changeset',
      ],
    ],
  },
};
