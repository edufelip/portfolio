/* eslint-disable @typescript-eslint/no-var-requires */

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/styles/**/*.{js,jsx,ts,tsx}',
    './src/lib/**/*.{js,jsx,ts,tsx}',
    './src/hooks/**/*.{js,jsx,ts,tsx}',
  ],
  safelist: {
    standard: [/^fa/, /^react-icons/, /^swiper/, /^sc-/],
  },
  defaultExtractor: (content) => content.match(/[^\s"'`]+/g) || [],
})

const plugins = [
  require('postcss-flexbugs-fixes'),
  require('postcss-preset-env')({
    autoprefixer: {
      flexbox: 'no-2009',
    },
    stage: 3,
  }),
]

if (process.env.NODE_ENV === 'production') {
  plugins.push(purgecss)
}

module.exports = {
  plugins,
}
