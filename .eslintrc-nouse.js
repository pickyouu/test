
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['eslint:recommended'],
  // plugins:[
  //   'react'
  // ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  // rules: {
  //   'no-var': 2,
  //   semi: ['error', 'never'],
  //   'quotes': ['error', 'single']

  // },
  // overrides: [
  //   {
  //     files: ['bin/*.js'],
  //     rules: {
  //       'quotes': ['error', 'double']
  //     }
  //   }
  // ]
}
