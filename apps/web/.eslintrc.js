module.exports = {
  ...require('config/eslint-preset'),
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  overrides: [
    {
      files: ['*.tsx'],
      extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
      plugins: ['react-hooks'],
      rules: {
        'import/order': [
          'error',
          {
            groups: [
              'builtin',
              'external',
              'internal',
              ['sibling', 'parent'],
              'index',
              'type',
              'object',
            ],
            'newlines-between': 'always-and-inside-groups',
            pathGroups: [
              {
                pattern: '~/**',
                group: 'internal',
              },
            ],
          },
        ],
      },
    },
  ],
};
