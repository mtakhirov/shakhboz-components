import type {
  MaybeArray,
  LanguageRegistration,
  ThemeRegistrationAny
} from "shiki/core";
import { createJavaScriptRegexEngine } from "shiki/engine/javascript";

// Themes
import AyuDark from "shiki/themes/ayu-dark.mjs";
import GithubDark from "shiki/themes/github-dark.mjs";
import VitesseBlack from "shiki/themes/vitesse-black.mjs";

// Languages
import LangVue from "shiki/langs/vue.mjs";
import LangShell from "shiki/langs/shell.mjs";
import LangTypeScript from "shiki/langs/typescript.mjs";
import LangJavaScript from "shiki/langs/typescript.mjs";

export const PRE_BLOCK = "PRE";
export const CODE_BLOCK = "CODE";

export const DEFAULT_LANG = "vue";
export const DEFAULT_THEME = "ayu-dark";

export const engine = createJavaScriptRegexEngine();

export const themes: MaybeArray<ThemeRegistrationAny>[] = [
  AyuDark,
  GithubDark,
  VitesseBlack
];

export const langs: MaybeArray<LanguageRegistration>[] = [
  LangVue,
  LangShell,
  LangJavaScript,
  LangTypeScript
];
