import json from '@rollup/plugin-json'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'rollup'

export default defineConfig({
  input: 'libs/main.ts',
  output: {
    file: 'dist/index.js',
    format: 'es',
    name: 'vue_hooks',
  },
  plugins: [
    vue(),
    json({
      include: 'package.json',
    }),
    typescript({
      lib: ['es5', 'es6', 'dom'],
      target: 'es5',
    }),
    terser(),
  ],
})
