import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from 'vite-plugin-dts'

export default defineConfig({
  base: "./",
  build: {
    // sourcemap: true,
    lib: {
      entry: [
        path.resolve(__dirname, "src/index.ts"),
        // path.resolve(__dirname, "src/interface/accordions.tsx"),
      ],
      formats: ['es'],
      // fileName: (format, entryName) => `${entryName}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", 'react/jsx-runtime'],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          'react/jsx-runtime': 'react/jsx-runtime',
        },
      }
    },
  },
  plugins: [react(), dts()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, "/src/components"),
      contexts: path.resolve(__dirname, "/src/contexts"),
      interface: path.resolve(__dirname, "/src/interface"),
      tailwind: path.resolve(__dirname, "/src/tailwind"),
      types: path.resolve(__dirname, "/src/types"),
      utils: path.resolve(__dirname, "/src/utils")
    },
  },
});
