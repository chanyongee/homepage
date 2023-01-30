module.exports = {
  env: { browser: true, es6: true, node: true },
  extends: [
    'eslint:recommended',
    'eslint-config-prettier',
    'plugin:import/recommended',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'plugin:vue/strongly-recommended',
  ],
  globals: { $nuxt: true },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['import', 'jest', 'nuxt', 'prettier', 'vue'],
  root: true,
  rules: {
    'array-bracket-spacing': ['warn', 'never'],
    camelcase: ['error', { properties: 'never' }],
    'comma-dangle': 'off',
    'computed-property-spacing': [
      'error',
      'never',
      { enforceForClassMembers: false },
    ],
    'generator-star-spacing': 'off',
    'import/no-unresolved': 'off',
    'new-cap': 'error',
    'no-array-constructor': 'error',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger':
      process.env.NUXT_ENV_STAGE === 'production' ? 'error' : 'warn',
    'no-duplicate-imports': 'error',
    'no-extra-semi': 'error',
    'no-inner-declarations': 'off',
    'no-new-object': 'error',
    'no-unused-vars': 'warn',
    'no-var': 'error',
    'object-curly-spacing': ['warn', 'always'],
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prettier/prettier': 'warn',
    quotes: ['warn', 'single', { allowTemplateLiterals: true }],
    'space-before-function-paren': 'off',
    'vue/html-self-closing': [
      'warn',
      { html: { void: 'always', normal: 'never' } },
    ],
    'vue/max-attributes-per-line': [
      'error',
      { singleline: { max: 10 }, multiline: { max: 1, allowFirstLine: false } },
    ],
    'vue/no-unused-components': 'warn',
    'vue/require-v-for-key': 'warn',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/v-bind-style': ['warn', 'shorthand'],
  },
}
