import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: "0.0.0.0",
    proxy: {
      "/api": {
        target: import.meta.env.VITE_BASE_URL,
        changeOrigin: true,
        secure: false,
        // 요청 경로에서 '/api'를 제거하고, 나머지 경로를 유지합니다.
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  resolve: {
    // 경로 alias 설정
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      { find: "@pages", replacement: path.resolve(__dirname, "src/pages") },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      { find: "@assets", replacement: path.resolve(__dirname, "src/assets") },
    ],
  },
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});
