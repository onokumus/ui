import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    include: ["baseline-status"],
  },
  css: {
    transformer: "lightningcss",
    lightningcss: {
      drafts: {
        customMedia: true,
      },
    },
  },
  build: {
    cssMinify: "lightningcss",
  },
});
