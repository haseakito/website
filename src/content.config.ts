import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const articles = defineCollection({
  loader: glob({ base: "./src/contents/articles", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    author: z.string(),
    category: z.string(),
    date: z.string(),
    description: z.string().optional(),
    excerpt: z.string(),
    slug: z.string(),
    tags: z.array(z.string()),
    thumbnail: z.string(),
    title: z.string(),
  }),
});

const other = defineCollection({
  loader: glob({ base: "./src/contents/other", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    author: z.string(),
    date: z.string(),
    description: z.string().optional(),
    slug: z.string(),
    title: z.string(),
  }),
});

export const collections = { articles, other };
