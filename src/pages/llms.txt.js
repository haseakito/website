import { getCollection } from "astro:content";

import { SITE_TITLE, SITE_DESCRIPTION } from "@/config/site";

export const GET = async (context) => {
  const posts = await getCollection("articles");
  const items = posts.map((post) => ({
    ...post.data,
    link: new URL(`/articles/${post.slug}/`, context.site).toString(),
  }));

  const pages = await getCollection("other");
  const otherItems = pages.map((post) => ({
    ...post.data,
    link: new URL(`/${post.slug}/`, context.site).toString(),
  }));

  const articleSection = `# ${SITE_TITLE}\n\n> ${SITE_DESCRIPTION}\n\n## Articles\n\n${items
    .map((item) => `- [${item.title}](${item.link}): ${item.description}`)
    .join("\n")}`;

  const body = `${articleSection}\n\n## Other\n\n${otherItems
    .map((item) => `- [${item.title}](${item.link}): ${item.description}`)
    .join("\n")}`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
};
