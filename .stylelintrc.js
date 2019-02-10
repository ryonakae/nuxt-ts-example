const css = {
  properties: 'assets/styles/properties.css',
  media: 'assets/styles/media.css'
}

module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  plugins: [
    'stylelint-value-no-exposed-custom-properties',
    'stylelint-value-no-unknown-custom-properties',
    'stylelint-media-use-custom-media',
    'stylelint-use-nesting'
  ],
  rules: {
    'declaration-colon-newline-after': null,
    'value-list-comma-newline-after': null,
    'no-descending-specificity': null,
    'selector-pseudo-class-no-unknown': null,
    'plugin/value-no-exposed-custom-properties': [
      true,
      { importFrom: [css.properties] }
    ],
    'csstools/value-no-unknown-custom-properties': [
      true,
      { importFrom: [css.properties] }
    ],
    'csstools/media-use-custom-media': [
      'always-known',
      { importFrom: [css.media] }
    ],
    'csstools/use-nesting': 'always'
  }
}
