<template>
  <div class="p-[32px] bg-white rounded-lg">
    <h2 class="text-black text-[20px] font-semibold">Input</h2>
    <MyInput
      :model-value="value"
      placeholder="Text"
      text="Label"
      type="password"
    ></MyInput>
  </div>
</template>
<script setup lang="ts">
import MyInput from "@/components/Input/MyInput.vue";
import { ref } from "vue";

const value = ref(null);
</script>
