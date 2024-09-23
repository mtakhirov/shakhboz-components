<template>
  <div>
    <label v-if="text" :for="id" class="text-dark text-sm font-medium mb-1">
      {{ text }} <span class="text-[#3392FF]">*</span></label
    >
    <div
      class="flex items-center border focus-within:border-blue rounded bg-white"
      :class="{ '!border-red-500': error }"
    >
      <slot name="prefix"></slot>
      <input
        v-bind="{
          placeholder,
          type,
          minlength,
          maxlength,
          id,
          required,
          disabled,
          readonly,
        }"
        :value="modelValue"
        @focus="emit('focus')"
        @blur="emit('blur')"
        @input="handleInput($event.target?.value)"
        @change="emit('change')"
        class="outline-none border-none w-full py-2 px-3 rounded text-base text-[#555]"
        :class="`inputClass text-${size}`"
      />
      <slot name="suffix"></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  modelValue: string | null;
  type?: string;
  placeholder: string;
  id?: string;
  maxlength?: number;
  minlength?: number;
  required?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  error?: boolean;
  text?: string;
  isLatin?: boolean;
  inputClass?: string;
  size?: "sm" | "md" | "lg" | "xl";
}
const props = withDefaults(defineProps<Props>(), {
  type: "text",
});
const emit = defineEmits<{
  (e: "update:modelValue", val: string): void;
  (e: "focus"): void;
  (e: "blur"): void;
  (e: "change"): void;
}>();
const handleInput = (e: string) => {
  emit("update:modelValue", e);
};
</script>
