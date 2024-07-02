const plugin = require('tailwindcss/plugin')

const VariantPlugin = plugin(function({ addVariant, e }) {

  addVariant('gh', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(`gh${separator}${className}`)}:group-hover`
    });
  });

  addVariant('h', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(`h${separator}${className}`)}:hover`
    });
  });

  addVariant('a', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(`a${separator}${className}`)}:active`
    });
  });

  addVariant('d', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(`d${separator}${className}`)}:disabled`
    });
  });

  addVariant('f', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(`f${separator}${className}`)}:focus`
    });
  });
});

module.exports = VariantPlugin;

// Docs
// https://tailwindcss.com/docs/plugins#adding-variants
