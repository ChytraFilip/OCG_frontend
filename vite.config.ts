import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8080",
        changeOrigin: true,
        secure: false,
        ws: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/endpoint-one": {
        target: "http://127.0.0.1:8080",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
      "/endpoint-two": {
        target: "http://127.0.0.1:8080",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
      "/endpoint-three": {
        target: "http://127.0.0.1:8080",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
      "/endpoint-four": {
        target: "http://127.0.0.1:8080",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
      "/endpoint-five": {
        target: "http://127.0.0.1:8080",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
    port: 5173,
  },
  plugins: [react()],
});