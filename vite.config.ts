import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    sourcemap: true,
    lib: {
      entry: [
        path.resolve(__dirname, "src/index.tsx"),
        path.resolve(__dirname, "src/test-title.tsx"),
        path.resolve(__dirname, "src/test-text.tsx"),
      ],
      // formats: ['es', 'cjs'],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        exports: "named",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        inlineDynamicImports: false,
      },
    },
  },
  resolve: {
    alias: {
      components: "/src/components",
      contexts: "/src/contexts",
      interface: "/src/interface",
      tailwind: "/src/tailwind",
      types: "/src/types",
      utils: "/src/utils",
      "test-title": "/src/test-title",
      "test-text": "/src/test-text",
    },
  },
});
