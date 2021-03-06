const typescriptRules = {
  '@typescript-eslint/await-thenable': 'error',
  '@typescript-eslint/ban-ts-ignore': 'error',
  '@typescript-eslint/member-naming': 'error',
  '@typescript-eslint/no-extra-parens': 'error',
  '@typescript-eslint/no-extraneous-class': 'error',
  '@typescript-eslint/no-for-in-array': 'error',
  '@typescript-eslint/no-this-alias': 'error',
  '@typescript-eslint/no-unnecessary-qualifier': 'warn',
  '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
  '@typescript-eslint/no-useless-constructor': 'error',
  '@typescript-eslint/prefer-for-of': 'warn',
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/indent': ['error', 2],
  '@typescript-eslint/unified-signatures': 'warn'
}
const eslintRulesRedundantWithTypescriptRules = {
  'no-extra-parens': 'off'
}
const eslintRules = {
  semi: ['warn', 'always'],
  'func-call-spacing': ['warn', 'never'],
  'no-async-promise-executor': 'error',
  'no-await-in-loop': 'error',
  'no-misleading-character-class': 'error',
  'no-prototype-builtins': 'error',
  'no-template-curly-in-string': 'warn',
  'require-atomic-updates': 'warn',
  'accessor-pairs': 'warn',
  'array-callback-return': 'warn',
  'class-methods-use-this': 'warn',
  'consistent-return': 'warn',
  curly: ['warn', 'all'],
  'default-case': 'error',
  'dot-location': ['warn', 'property'],
  'dot-notation': 'warn',
  eqeqeq: ['error', 'always'],
  'guard-for-in': 'error',
  'max-classes-per-file': ['error', 10],
  'no-alert': 'error',
  'no-caller': 'error',
  'no-div-regex': 'error',
  'no-eval': 'error',
  'no-extend-native': 'error',
  'no-extra-bind': 'error',
  'no-floating-decimal': 'error',
  'no-implicit-coercion': 'error',
  'no-implicit-globals': 'error',
  'no-implied-eval': 'error',
  'no-invalid-this': 'error',
  'no-iterator': 'error',
  'no-labels': 'error',
  'no-lone-blocks': 'error',
  'no-loop-func': 'error',
  'no-multi-spaces': 'error',
  'no-multi-str': 'error',
  'no-new': 'error',
  'no-new-func': 'error',
  'no-new-wrappers': 'error',
  'no-proto': 'error',
  'no-return-assign': 'error',
  'no-return-await': 'error',
  'no-script-url': 'error',
  'no-self-compare': 'error',
  'no-sequences': 'error',
  'no-throw-literal': 'error',
  'no-useless-call': 'error',
  'no-useless-catch': 'error',
  'no-useless-concat': 'error',
  'no-useless-return': 'error',
  'no-void': 'error',
  'no-warning-comments': 'warn',
  'no-with': 'error',
  'prefer-promise-reject-errors': 'error',
  radix: 'error',
  'require-await': 'warn',
  yoda: ['error', 'never'],
  'no-undef-init': 'warn',
  'handle-callback-err': 'error',
  'no-buffer-constructor': 'error',
  'no-path-concat': 'error',
  'no-process-exit': 'error',
  'array-bracket-newline': ['error', { multiline: true }],
  'array-bracket-spacing': ['error', 'never'],
  'array-element-newline': ['error', 'consistent'],
  'block-spacing': ['error', 'always'],
  'brace-style': ['error', '1tbs', { allowSingleLine: true }],
  'comma-dangle': ['error', 'always-multiline'],
  'comma-spacing': ['error', { before: false, after: true }],
  'comma-style': ['error', 'last'],
  'computed-property-spacing': ['error', 'never'],
  'consistent-this': 'error',
  'eol-last': ['error', 'always'],
  'func-name-matching': 'error',
  'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
  'function-paren-newline': ['error', 'multiline'],
  'id-length': ['error', {
    min: 2,
    max: 80
  }],
  'key-spacing': ['error', { beforeColon: false, afterColon: true }],
  'keyword-spacing': ['error', { before: true, after: true }],
  'new-cap': ['error', { newIsCap: true, capIsNew: false }],
  'linebreak-style': ['error', 'unix'],
  'max-depth': ['error', 30],
  'max-len': ['warn', {
    code: 128,
    ignoreUrls: true,
    ignoreStrings: true,
    ignoreTemplateLiterals: true,
    ignoreRegExpLiterals: true
  }],
  'max-params': ['error', 6],
  'multiline-comment-style': ['warn', 'starred-block'],
  'new-parens': 'warn',
  'no-lonely-if': 'warn',
  'no-new-object': 'error',
  'no-plusplus': 'warn',
  'no-tabs': 'error',
  'no-trailing-spaces': 'warn',
  'no-unneeded-ternary': 'warn',
  'no-whitespace-before-property': 'warn',
  'object-curly-spacing': ['warn', 'always'],
  'object-property-newline': ['warn', { allowMultiplePropertiesPerLine: true }],
  'operator-assignment': ['warn', 'always'],
  quotes: ['warn', 'single', {
    avoidEscape: true,
    allowTemplateLiterals: false
  }],
  'no-var': 'error',
  'prefer-const': 'error',
  'prefer-arrow-callback': ['warn', { allowNamedFunctions: true }],
  'prefer-template': 'warn',
  'prefer-destructuring': ['warn', { object: true, array: false }],
  'object-shorthand': 'error',
  'no-useless-rename': 'error'
}

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  env: {
    es6: true,
    node: true
  },
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: Object.assign(
    {},
    typescriptRules,
    eslintRulesRedundantWithTypescriptRules,
    eslintRules
  )
}
