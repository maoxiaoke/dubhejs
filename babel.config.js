module.exports = {
  presets: [
    // ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-env',
    '@babel/typescript'
  ],
  plugins: [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread'
  ]
}
// {
//   "presets": [
//     "@babel/preset-env",
//     "@babel/typescript"
//   ],
//   "plugins": [
//     "@babel/proposal-class-properties",
//     "@babel/proposal-object-rest-spread"
//   ]
// }
