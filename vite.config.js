import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

import { viteMockServe } from 'vite-plugin-mock';

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), WindiCSS(),

    viteMockServe({
      ignore: /^\_/, // 以 _ 开头的是工具文件，忽略
      mockPath: 'mock', // 存放在 mock 目录下
      prodEnabled: false, // 关闭生产环境 mock
      injectCode: `
          import { setupProdMockServer } from './mockProdServer';
          setupProdMockServer();
        `,
    }),

  ],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src")
    },
    // git commit --amend --author "zgo <zero.zhh.li@gmail.com>"

  },

  server:{
    proxy:{
      '/api': {
        // target: 'http://ceshi13.dishait.cn',
        target: 'http://127.0.0.1:5173',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  },
})
