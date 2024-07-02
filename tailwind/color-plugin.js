const plugin = require('tailwindcss/plugin');


const ColorPlugin = plugin(function({ addUtilities, theme }) {
  const tailwind = theme('colors') || {};
  // console.log('tailwindColors: ', tailwind);
  const utils = {};


  Object.keys(tailwind).map(key => {
    if (typeof tailwind[key] == 'string') {
      return utils[`.${key}`] = {
        color: tailwind[key],
        stroke: tailwind[key],
      }
    }
    if (tailwind[key]?.constructor == Object) {
      Object.keys(tailwind[key] || {}).map(nestedKey => {
        if (nestedKey == 'DEFAULT') {
          return utils[`.${key}`] = {
            color: tailwind[key][nestedKey],
            stroke: tailwind[key][nestedKey],
          }
        }
        return utils[`.${key}-${nestedKey}`] = {
          color: tailwind[key][nestedKey],
          stroke: tailwind[key][nestedKey]
        };
      });
    }
  });


  // console.log('colorPlugin: ', utils);
  addUtilities(utils);
});


module.exports = ColorPlugin;

// Docs
// https://tailwindcss.com/docs/plugins
