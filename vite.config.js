import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  root: "client", // source code folder
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src") // <-- fixes the @/... imports
    }
  },
  build: {
    outDir: path.resolve(__dirname, "dist"), // root/dist
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, "client/index.html")
    }
  }
});
