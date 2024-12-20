<template>
  <component :is="as" :class="buttonClass">
    <svg
      v-if="loading"
      class="animate-spin h-5 w-5 text-white absolute"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
    <component
      v-if="!loading"
      :is="props.leftIcon"
      :class="[
        'w-5 h-5 mr-2',
        props.loading && 'invisible',
        props.size === 'small' && 'text-xs',
        props.size === 'medium' && 'text-sm',
        props.size === 'large' && 'text-base',
      ]"
      class="w-5 h-5 mr-2"
    />
    <span :class="[props.loading && 'invisible']">
      <slot />
    </span>
    <component
      v-if="!loading"
      :is="props.rightIcon"
      :class="[
        props.loading && 'invisible',
        props.size === 'small' && 'w-3.5 h-3.5 ml-1',
        props.size === 'medium' && 'w-4.5 h-4.5 ml-1.5',
        props.size === 'large' && 'w-5.5 h-5.5 ml-2',
      ]"
      class="w-5 h-5 ml-2"
    />
  </component>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { cva } from "class-variance-authority";

const props = defineProps({
  leftIcon: Object,
  rightIcon: Object,
  loading: Boolean,
  as: {
    type: [String, Object],
    default: "button",
  },
  type: {
    type: String,
    default: "info",
    validator: (val) =>
      ["primary", "secondary", "danger", "info"].includes(val),
  },
  disabled: Boolean,
  size: {
    type: String,
    default: "medium",
    validator: (val) => ["small", "medium", "large"].includes(val),
  },
});

const buttonClass = computed(() => {
  return cva(
    "flex items-center justify-center  rounded font-semibold focus:outline-none",
    {
      variants: {
        type: {
          primary: "bg-blue-900 text-white hover:bg-blue-800",
          black: "bg-black text-white hover:bg-gray-800",
          info: "bg-black/20 text-white hover:bg-black/30 text-gray-700",
          danger: "bg-red-600 text-white hover:bg-red-500",
          secondary: "bg-green-600 text-white hover:bg-green-500",
        },
        disabled: {
          true: "!bg-gray-100 !text-gray-400 cursor-not-allowed",
        },
        size: {
          small: "px-2 min-h-[26px] text-xs",
          medium: "px-3 min-h-[32px] text-sm",
          large: "px-4 min-h-[36px] text-base",
        },
      },
    },
  )({
    type: props.type,
    disabled: props.disabled,
    size: props.size,
  });
});
</script>

<style scoped></style>
