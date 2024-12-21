import { createHighlighterCoreSync } from "shiki/core";
import { themes, langs, engine } from "@/modules/shiki/config";

export default createHighlighterCoreSync({
  themes,
  langs,
  engine
});
