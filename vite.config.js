import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  root: path.resolve(__dirname, "client"), // build source is client folder
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src") // fix @ imports
    }
  },
  build: {
    outDir: path.resolve(__dirname, "dist"), // output to root/dist
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, "client/index.html")
    }
  }
});
