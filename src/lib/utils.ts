import { clsx } from "clsx";
import type { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const getReadingTime = (content: string): string => {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
};

export const formatDate = (date: string): string =>
  new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const ensureLeadingSlash = (value: string) =>
  value.startsWith("/") ? value : `/${value}`;

export const normalizePathname = (pathname: string): string => {
  if (!pathname) {
    return "/";
  }

  const input = ensureLeadingSlash(pathname === "/" ? "/" : pathname);

  if (input === "/index.html") {
    return "/";
  }

  if (input.endsWith("/index.html")) {
    const trimmed = input.slice(0, -"/index.html".length);
    return trimmed === "" ? "/" : trimmed;
  }

  if (input.endsWith(".html")) {
    const trimmed = input.slice(0, -".html".length);
    return trimmed === "" ? "/" : ensureLeadingSlash(trimmed);
  }

  return input;
};

export const buildCanonicalUrl = (url: URL, site?: string | URL): string => {
  let baseInput: string;
  if (site) {
    baseInput = typeof site === "string" ? site : site.href;
  } else {
    baseInput = url.origin;
  }
  const base = new URL(baseInput);
  const pathname = normalizePathname(url.pathname);
  const canonical = new URL(pathname + url.search, base);
  canonical.hash = "";
  return canonical.href;
};
