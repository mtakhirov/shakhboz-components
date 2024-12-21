import {
  CODE_BLOCK,
  PRE_BLOCK,
  normalizeLang,
  normalizeTheme
} from "@/modules/shiki";

type CodeBlockDetails = {
  lang: string;
  theme: string;
  snippet: string;
};

export const getCodeBlockDetails = (element: HTMLElement): CodeBlockDetails => {
  if (element.tagName !== CODE_BLOCK) {
    throw new Error("code block not found!");
  }

  const codeLang = normalizeLang(element.getAttribute("data-lang"));
  const codeTheme = normalizeTheme(element.getAttribute("data-theme"));

  const childElement = element.children[0];

  if (childElement.tagName !== PRE_BLOCK) {
    throw new Error("pre block not found!");
  }

  const codeSnippet = childElement.textContent ?? "";

  return {
    lang: codeLang,
    theme: codeTheme,
    snippet: codeSnippet
  };
};
