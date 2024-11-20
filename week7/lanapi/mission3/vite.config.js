import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/auth': {
        target: 'http://localhost:3000', // 백엔드 서버
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/auth/, ''), // /auth 제거
      },
      '/user': {
        target: 'http://localhost:3000', // 백엔드 서버
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
