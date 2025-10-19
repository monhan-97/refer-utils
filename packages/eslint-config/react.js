import reactHooks from 'eslint-plugin-react-hooks';
import reactESLintPlugin from 'eslint-plugin-react';
import jsxA11yESLintPlugin from 'eslint-plugin-jsx-a11y';

const reactRecommendedFlatConfig = reactESLintPlugin.configs.flat.recommended;

const reactHooksRecommendedFlatConfig = reactHooks.configs.flat.recommended;

const reactJsxRuntimeFlatConfig = reactESLintPlugin.configs.flat['jsx-runtime'];

const reactESLintConfig = [
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'jsx-a11y': jsxA11yESLintPlugin,
      'react-hooks': reactHooks,
      react: reactESLintPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      //react
      'react/jsx-uses-vars': 'error',
      'react/jsx-uses-react': 'error',
      'react/forbid-foreign-prop-types': ['error', { allowInPropTypes: true }],
      'react/jsx-no-comment-textnodes': 'error',
      'react/jsx-no-duplicate-props': 'error',
      'react/jsx-no-target-blank': 'error',
      'react/jsx-no-undef': 'error',
      'react/jsx-pascal-case': [
        'error',
        {
          allowAllCaps: true,
          ignore: [],
        },
      ],
      'react/no-danger-with-children': 'error',
      'react/no-deprecated': 'warn',
      'react/no-direct-mutation-state': 'error',
      'react/no-is-mounted': 'error',
      'react/no-typos': 'error',
      'react/require-render-return': 'error',
      'react/style-prop-object': 'error',

      //jsx-ally
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/anchor-has-content': 'error',
      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          aspects: ['noHref', 'invalidHref'],
        },
      ],
      'jsx-a11y/aria-activedescendant-has-tabindex': 'error',
      'jsx-a11y/aria-props': 'error',
      'jsx-a11y/aria-proptypes': 'error',
      'jsx-a11y/aria-role': ['error', { ignoreNonDOM: true }],
      'jsx-a11y/aria-unsupported-elements': 'error',
      'jsx-a11y/heading-has-content': 'error',
      'jsx-a11y/iframe-has-title': 'error',
      'jsx-a11y/img-redundant-alt': 'error',
      'jsx-a11y/no-access-key': 'error',
      'jsx-a11y/no-distracting-elements': 'error',
      'jsx-a11y/no-redundant-roles': 'error',
      'jsx-a11y/role-has-required-aria-props': 'error',
      'jsx-a11y/role-supports-aria-props': 'error',
      'jsx-a11y/scope': 'error',

      ...reactRecommendedFlatConfig.rules,
      ...reactJsxRuntimeFlatConfig.rules,
      ...reactHooksRecommendedFlatConfig.rules,
    },
  },
];

export default reactESLintConfig;
