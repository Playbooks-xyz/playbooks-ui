import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, "src/index.tsx"),
      name: "playbooksInterface",
      formats: ["es", "cjs", "umd", "iife"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      // input: {
      //   "index": "src/index.tsx",
      //   "accordions": "src/interface/accordions.tsx"
      // },
      output: {
        // exports: "named",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
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

      accordions: "/src/accordions",
      alerts: "/src/alerts",
      avatars: "/src/avatars",
      badges: "/src/badges",
      banners: "/src/banners",
      breadcrumbs: "/src/breadcrumbs",
      buttons: "/src/buttons",
      ["button-groups"]: "/src/button-groups",
      cards: "/src/cards",
      drops: "/src/drops",
      feedbacks: "/src/feedbacks",
      fonts: "/src/fonts",
      footers: "/src/footers",
      forms: "/src/forms",
      grid: "/src/grid",
      head: "/src/head",
      headers: "/src/headers",
      heros: "/src/heros",
      html: "/src/html",
      icons: "/src/icons",
      ["input-groups"]: "/src/input-groups",
      links: "/src/links",
      ["list-groups"]: "/src/list-groups",
      loaders: "/src/loaders",
      menus: "/src/menus",
      modals: "/src/modals",
      navbars: "/src/navbars",
      navs: "/src/navs",
      paginations: "/src/paginations",
      prefooters: "/src/prefooters",
      ["progress-bars"]: "/src/progress-bars",
      radios: "/src/radios",
      ranges: "/src/ranges",
      routes: "/src/routes",
      sections: "/src/sections",
      slides: "/src/slides",
      spinners: "/src/spinners",
      switches: "/src/switches",
      tables: "/src/tables",
      tabs: "/src/tabs",
      tags: "/src/tags",
      toasts: "/src/toasts",
      tooltips: "/src/tooltips"
    },
  },
});
