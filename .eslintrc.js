module.exports = {
  root: true,
  env: {
    node: true,
    webextensions: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    // TODO: Restore severity to 'error'
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'max-len': ['error', {
      code: 80
    }],
    'vue/script-indent': ['error', 2, {
      switchCase: 1,
      baseIndent: 1
    }] // Supersedes the normal indent rule
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off' // Replaced by vue/script-indent
      }
    }
  ],
  parserOptions: {
    parser: 'babel-eslint'
  }
}
