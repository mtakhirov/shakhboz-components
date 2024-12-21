import { DEFAULT_LANG, DEFAULT_THEME } from "@/modules/shiki";

const LANG_MAP: Record<string, string> = {
  ts: "typescript",
  js: "javascript"
};

const THEME_MAP: Record<string, string> = {
  ayu: "ayu-dark",
  github: "github-dark",
  vitesse: "vitesse-dark"
};

export const normalizeLang = (lang: string | null): string => {
  if (!lang) return DEFAULT_LANG;
  if (LANG_MAP[lang]) return LANG_MAP[lang];

  return lang;
};

export const normalizeTheme = (theme: string | null): string => {
  if (!theme) return DEFAULT_THEME;
  if (THEME_MAP[theme]) return THEME_MAP[theme];

  return theme;
};
