<template>
  <div class="flex flex-col gap-5">
    <p class="text-3xl font-bold">Buttons</p>
    <div>
      <p class="text-xl font-semibold mb-2">Base</p>
      <div class="flex items-center gap-3">
        <MyButton type="black">Black</MyButton>
        <MyButton type="primary">Primary</MyButton>
        <MyButton type="secondary">Secondary</MyButton>
        <MyButton type="danger">Danger</MyButton>
        <MyButton type="info">Info</MyButton>
      </div>
      <pre class="text-sm">
        <code id="base"></code>
      </pre>
    </div>
    <div>
      <p class="text-xl font-semibold mb-2">Loading</p>
      <div class="flex items-center gap-3">
        <MyButton loading type="black">Black</MyButton>
        <MyButton loading type="primary">Primary</MyButton>
      </div>
      <pre class="text-sm">
        <code id="loading"></code>
      </pre>
    </div>
    <div>
      <p class="text-xl font-semibold mb-2">Icon button</p>
      <div class="flex items-center gap-3">
        <MyButton :left-icon="EnvelopeIcon" type="black">Black</MyButton>
        <MyButton :right-icon="EnvelopeIcon" type="primary">Primary</MyButton>
      </div>
      <pre class="text-sm">
        <code id="icon"></code>
      </pre>
    </div>
    <div>
      <p class="text-xl font-semibold mb-2">Size</p>
      <div class="flex items-center gap-3">
        <MyButton :right-icon="EnvelopeIcon" type="black" size="small"
          >Small</MyButton
        >
        <MyButton :right-icon="EnvelopeIcon" type="black">Medium</MyButton>
        <MyButton :right-icon="EnvelopeIcon" type="black" size="large"
          >Large</MyButton
        >
      </div>
      <pre class="text-sm">
        <code id="size"></code>
      </pre>
    </div>
  </div>
</template>
<script setup lang="ts">
import MyButton from "@/components/Button/MyButton.vue";
import { EnvelopeIcon } from "@heroicons/vue/20/solid";
import { onMounted } from "vue";
import hljs from "highlight.js/lib/core";
import xml from "highlight.js/lib/languages/xml"; // For HTML/Vue template syntax
import javascript from "highlight.js/lib/languages/javascript"; // For JavaScript
import css from "highlight.js/lib/languages/css"; // For CSS

hljs.registerLanguage("vue", xml);
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("css", css);

const base = `<template>
  <div class="flex items-center gap-3 mb-5">
    <my-button type="black">Black</my-button>
    <my-button type="primary">Primary</my-button>
    <my-button type="secondary">Secondary</my-button>
    <my-button type="danger">Danger</my-button>
    <my-button type="info">Info</my-button>
  </div>
</template>
`;
const loading = `<template>
  <div class="flex items-center gap-3">
    <my-button loading type="black">Black</my-button>
    <my-button loading type="primary">Primary</my-button>
  </div>
</template>
`;
const icon = `<template>
  <div class="flex items-center gap-3">
    <my-button :left-icon="EnvelopeIcon" type="black">Black</my-button>
    <my-button :right-icon="EnvelopeIcon" type="primary">Primary</my-button>
  </div>
</template>`;
const size = `<template>
  <div class="flex items-center gap-3">
    <my-button :right-icon="EnvelopeIcon" type="black" size="small"
      >Small</my-button
    >
    <my-button :right-icon="EnvelopeIcon" type="black">Medium</my-button>
    <my-button :right-icon="EnvelopeIcon" type="black" size="large"
      >Large</my-button
    >
  </div>
</template>`;

onMounted(() => {
  const baseBlock = document.querySelector("pre #base");
  const loadingBlock = document.querySelector("pre #loading");
  const iconBlock = document.querySelector("pre #icon");
  const sizeBlock = document.querySelector("pre #size");
  if (baseBlock && loading && iconBlock) {
    baseBlock.textContent = base;
    loadingBlock.textContent = loading;
    iconBlock.textContent = icon;
    sizeBlock.textContent = size;
    hljs.highlightElement(<HTMLElement>baseBlock);
    hljs.highlightElement(<HTMLElement>loadingBlock);
    hljs.highlightElement(<HTMLElement>iconBlock);
    hljs.highlightElement(<HTMLElement>sizeBlock);
  }
});
</script>
<style scoped></style>
