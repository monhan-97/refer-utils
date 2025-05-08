import tsEslintParser from '@typescript-eslint/parser';
import tsEslintPlugin from '@typescript-eslint/eslint-plugin';
import importXESLintPlugin from 'eslint-plugin-import-x';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';

const commonConfig = {
  files: ['**/*.{ts,js,tsx}'],
  languageOptions: {
    parser: tsEslintParser,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
      warnOnUnsupportedTypeScriptVersion: true,
    },
    globals: { ...globals.node, ...globals.browser },
  },
};

const baseConfig = {
  files: ['**/*.{ts,js}'],
  ignores: [
    '.vscode/',
    '.idea/',
    '.git/',
    '.yarn/',
    '.next/',
    '.husky/',
    '.local/',
    '.next/',
    'tmp/',
    'bin/',
    'build/',
    'dist/',
    'node_modules/',
    '**/*.md',
    '**/*.woff',
    '**/*.ttf',
  ],
  plugins: {
    unicorn: eslintPluginUnicorn,
    '@typescript-eslint': tsEslintPlugin,
  },
  rules: {
    // best-practice
    'array-callback-return': 'error',
    'dot-location': ['error', 'property'],
    eqeqeq: ['error', 'smart'],
    'new-parens': 'error',
    'no-array-constructor': 'error',
    'no-caller': 'error',
    'no-cond-assign': ['error', 'except-parens'],
    'no-const-assign': 'error',
    'no-control-regex': 'error',
    'no-delete-var': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-func-assign': 'error',
    'no-implied-eval': 'error',
    'no-invalid-regexp': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': ['error', { allowLoop: true, allowSwitch: false }],
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-mixed-operators': [
      'error',
      {
        groups: [
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
        allowSamePrecedence: false,
      },
    ],
    'no-multi-str': 'error',
    'no-global-assign': 'error',
    'no-unsafe-negation': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-restricted-syntax': ['error', 'WithStatement'],
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow-restricted-names': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-unreachable': 'warn',
    'no-unused-labels': 'error',
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: false,
      },
    ],
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': [
      'error',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],
    'no-with': 'error',
    'no-whitespace-before-property': 'error',
    'require-yield': 'error',
    'rest-spread-spacing': ['error', 'never'],
    strict: ['error', 'never'],
    'unicode-bom': ['error', 'never'],
    'use-isnan': 'error',
    'valid-typeof': 'error',
    'no-restricted-properties': [
      'error',
      {
        object: 'require',
        property: 'ensure',
        message:
          'Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting',
      },
      {
        object: 'System',
        property: 'import',
        message:
          'Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting',
      },
    ],
    'getter-return': 'error',

    // 'tsc' already handles this
    'no-unused-vars': 'off',
    // TypeScript's `noFallthroughCasesInSwitch` option is more robust (#6906)
    'default-case': 'off',
    // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/291)
    'no-dupe-class-members': 'off',
    // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/477)
    'no-undef': 'off',
    'no-unused-expressions': 'off',

    // import-x
    'import-x/first': 'error',
    'import-x/no-amd': 'error',
    'import-x/no-anonymous-default-export': [
      'error',
      {
        allowObject: true,
      },
    ],
    'import-x/no-webpack-loader-syntax': 'error',
    'import-x/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'sibling', 'parent', 'index', 'unknown'],
        'newlines-between': 'always',
      },
    ],
    'import-x/no-unresolved': [
      2,
      {
        commonjs: true,
        caseSensitiveStrict: true,
        amd: true,
      },
    ],
    'import-x/no-extraneous-dependencies': 'off',
    'import-x/no-rename-default': 'off',
    'import-x/default': 'off',

    // unicorn
    'unicorn/custom-error-definition': 'error',
    'unicorn/error-message': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/new-for-builtins': 'error',
    'unicorn/no-array-method-this-argument': 'error',
    'unicorn/no-array-push-push': 'error',
    'unicorn/no-console-spaces': 'error',
    'unicorn/no-hex-escape': 'error',
    'unicorn/no-instanceof-array': 'error',
    'unicorn/no-invalid-remove-event-listener': 'error',
    'unicorn/no-new-array': 'error',
    'unicorn/no-new-buffer': 'error',
    'unicorn/no-unsafe-regex': 'off',
    'unicorn/number-literal-case': 'error',
    'unicorn/prefer-array-find': 'error',
    'unicorn/prefer-array-flat-map': 'error',
    'unicorn/prefer-array-index-of': 'error',
    'unicorn/prefer-array-some': 'error',
    'unicorn/prefer-date-now': 'error',
    'unicorn/prefer-dom-node-dataset': 'error',
    'unicorn/prefer-keyboard-event-key': 'error',
    'unicorn/prefer-math-trunc': 'error',
    'unicorn/prefer-modern-dom-apis': 'error',
    'unicorn/prefer-negative-index': 'error',
    'unicorn/prefer-number-properties': 'error',
    'unicorn/prefer-optional-catch-binding': 'error',
    'unicorn/prefer-prototype-methods': 'error',
    'unicorn/prefer-reflect-apply': 'error',
    'unicorn/prefer-string-slice': 'error',
    'unicorn/prefer-string-starts-ends-with': 'error',
    'unicorn/prefer-string-trim-start-end': 'error',
    'unicorn/prefer-type-error': 'error',
    'unicorn/throw-new-error': 'error',
    'unicorn/expiring-todo-comments': 2,

    // other
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
      },
    ],
    indent: 'off',

    // @typescript-eslint
    '@typescript-eslint/no-useless-constructor': 'warn',
    '@typescript-eslint/no-use-before-define': [
      'warn',
      {
        functions: false,
        classes: false,
        variables: false,
        typedefs: false,
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'none',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    '@typescript-eslint/no-redeclare': 'warn',
    '@typescript-eslint/no-array-constructor': 'warn',
    // Add TypeScript specific rules (and turn off ESLint equivalents)
    '@typescript-eslint/consistent-type-assertions': 'warn',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/indent': 'off',
  },
};

const eslintBaseJSConfig = [
  eslintConfigPrettier,
  commonConfig,
  importXESLintPlugin.flatConfigs.warnings,
  importXESLintPlugin.flatConfigs.errors,
  importXESLintPlugin.flatConfigs.typescript,
  baseConfig,
];

export default eslintBaseJSConfig;
