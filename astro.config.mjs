import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import compress from "astro-compress";
import { defineConfig } from "astro/config";
import remarkToc from "remark-toc";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    mdx(),
    sitemap({
      changefreq: "weekly",
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
          ja: "ja-JP",
        },
      },
      lastmod: new Date(),
      priority: 0.7,
    }),
    compress(),
  ],

  markdown: {
    remarkPlugins: [[remarkToc, { heading: "toc", maxDepth: 3 }]],
    shikiConfig: {
      theme: "github-dark",
    },
  },

  site: "https://haseakito.com",

  vite: {
    plugins: [tailwindcss()],
  },
});
