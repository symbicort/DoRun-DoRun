import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    // proxy: {
    //   '/api': {
    //     target: 'https://43.203.227.36.sslip.io/server',
    //     changeOrigin: true,
    //   }
    // },
  },
  build: {
          rollupOptions: {
              output: {
                  manualChunks(id) {
                      if (id.includes("node_modules")) {
                          return id
                              .toString()
                              .split("node_modules/")[1]
                              .split("/")[0]
                              .toString();
                      }
                  },
              },
          },
          chunkSizeWarningLimit: 1600
      },

});
