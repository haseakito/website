import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

import { SITE_TITLE, SITE_DESCRIPTION } from "@/config/site";

export const GET = async (context) => {
  const posts = await getCollection("articles");
  const articleItems = posts.map((post) => ({
    ...post.data,
    link: `/articles/${post.slug}/`,
  }));

  const pages = await getCollection("other");
  const pageItems = pages.map((post) => ({
    ...post.data,
    link: `/${post.slug}/`,
  }));

  return rss({
    description: SITE_DESCRIPTION,
    items: [...articleItems, ...pageItems],
    site: context.site,
    title: SITE_TITLE,
  });
};
