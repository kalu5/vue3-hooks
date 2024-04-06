import antfu from '@antfu/eslint-config'

export default antfu({
  // 自定义配置
  ignores: [
    '/__test__',
    '/node_modules/*',
    '/dist/*',
    '/.husky/*',
  ],
})
