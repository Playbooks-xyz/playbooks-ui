import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from 'vite-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  base: "./",
  build: {
    // sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, "src/index.tsx"),
      formats: ['es'],
      name: 'playbooks-interface',
      fileName: (format, entryName) => `${entryName}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", 'react/jsx-runtime', 'tailwindcss'],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          'react/jsx-runtime': 'react/jsx-runtime',
          'tailwindcss': 'tailwindcss'
        },
        preserveModules: true
      },
      plugins: [peerDepsExternal()]
    },
  },
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss]
    }
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, "/src"),
      components: path.resolve(__dirname, "/src/components"),
      contexts: path.resolve(__dirname, "/src/contexts"),
      interface: path.resolve(__dirname, "/src/interface"),
      tailwind: path.resolve(__dirname, "/src/tailwind"),
      types: path.resolve(__dirname, "/src/types"),
      utils: path.resolve(__dirname, "/src/utils")
    },
  },
});
