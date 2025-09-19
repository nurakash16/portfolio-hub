import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  root: "client",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src")
    }
  },
  build: {
    outDir: path.resolve(__dirname, "client/dist"), // <-- put dist inside client
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, "client/index.html")
    }
  }
});
