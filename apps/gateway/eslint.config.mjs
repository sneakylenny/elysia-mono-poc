// @ts-check

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'

export default tseslint.config(
  {
    plugins: {
      '@stylistic': stylistic,
    },
  },
  eslint.configs.recommended,
  stylistic.configs['recommended-flat'],
  tseslint.configs.recommended,
)
