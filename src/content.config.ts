import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const articles = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/contents/articles" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    thumbnail: z.string(),
    date: z.string(),
    category: z.string(),
    excerpt: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()),
    author: z.string(),
  }),
});

const other = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/contents/other" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    slug: z.string(),
    date: z.string(),
    author: z.string(),
  }),
});

export const collections = { articles, other };
