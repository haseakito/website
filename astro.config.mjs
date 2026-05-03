// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

import remarkToc from "remark-toc";
import tailwindcss from "@tailwindcss/vite";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://haseakito.com",

  integrations: [
    react(),
    mdx(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
          ja: "ja-JP",
        },
      },
    }),
    compress(),
  ],

  markdown: {
    remarkPlugins: [[remarkToc, { heading: "toc", maxDepth: 3 }]],
    shikiConfig: {
      theme: "github-dark",
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
