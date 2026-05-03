import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function normalizePathname(pathname: string): string {
  if (!pathname) return "/";

  const ensureLeadingSlash = (value: string) => (value.startsWith("/") ? value : `/${value}`);

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
}

export function buildCanonicalUrl(url: URL, site?: string | URL): string {
  const baseInput = site ? (typeof site === "string" ? site : site.href) : url.origin;
  const base = new URL(baseInput);
  const pathname = normalizePathname(url.pathname);
  const canonical = new URL(pathname + url.search, base);
  canonical.hash = "";
  return canonical.href;
}
