import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';

export default defineConfig([
  globalIgnores(['dist', 'build', 'node_modules', 'coverage']),

  {
    files: ['**/*.{js,jsx}'],

    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',

      globals: {
        ...globals.browser,
      },

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    plugins: {
      'simple-import-sort': simpleImportSort,
    },

    rules: {
      /*
      -------------------------
      Base JS hygiene
      -------------------------
      */

      'no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^[A-Z_]',
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],

      'no-multiple-empty-lines': [
        'error',
        {
          max: 1,
          maxEOF: 0,
          maxBOF: 0,
        },
      ],

      'eol-last': ['error', 'always'],

      /*
      -------------------------
      Import sorting
      -------------------------
      */

      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react$', '^react-dom$'],
            ['^@?\\w'],
            ['^@/'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^\\./(?!/?$)', '^\\./?$'],
            ['^.+\\.s?css$'],
            ['^.+\\.(png|jpe?g|svg|gif|webp)$'],
          ],
        },
      ],

      'simple-import-sort/exports': 'error',
    },
  },
]);
