module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    './node_modules/prettier-stylelint/config.js'
  ],
  rules: {
    'declaration-colon-newline-after': null,
    'value-list-comma-newline-after': null,
    'no-descending-specificity': null,
    'selector-pseudo-class-no-unknown': null
  }
}