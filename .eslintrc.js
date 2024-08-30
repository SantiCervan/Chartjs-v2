/* eslint-disable prettier/prettier */
module.exports = {
  extends: ['next/core-web-vitals', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': 'warn',
    'no-console': 'warn',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
};
