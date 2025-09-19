import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  root: "client", // your source code
  build: {
    outDir: path.resolve(__dirname, "dist"), // outputs to root/dist
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, "client/index.html")
    }
  }
});
