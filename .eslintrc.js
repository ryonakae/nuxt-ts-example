module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'prettier/standard',
    'prettier/@typescript-eslint',
    'prettier/vue'
  ],
  rules: {
    'no-console': 'off',
    'no-unused-vars': 'warn',
    'vue/max-attributes-per-line': 'off',
    'vue/no-v-html': 'warn',
    'vue/html-self-closing': 'off',
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        ignores: ['nuxt', 'nuxt-link', 'transition', 'no-ssr']
      }
    ]
  }
}
