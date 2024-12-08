import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/auth': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/user': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
});

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/auth': {
//         target: 'http://localhost:3000', // 서버 주소
//         changeOrigin: true,
//         secure: false,
//         rewrite: (path) => path.replace(/^\/auth/, '/auth'),
//       },
//       '/user': {
//         target: 'http://localhost:3000',
//         changeOrigin: true,
//         secure: false,
//         rewrite: (path) => path.replace(/^\/user/, '/user'),
//       },
//     },
//   },
// });
