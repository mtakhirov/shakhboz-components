<template>
  <div>
    <table class="w-full table">
      <thead class="head">
        <tr class="p-2 t-row">
          <th v-for="(elem, i) in headers" :key="i" class="text-left px-2 py-1">
            <p class="text-[13px]">{{ elem.text }}</p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(el, i) in itemsData" :key="i" class="t-data">
          <td v-for="(elem, index) in el" :key="index" class="p-2 text-sm">
            {{ elem }}
          </td>
        </tr>
      </tbody>
    </table>
    <pre>{{ itemsData }}</pre>
  </div>
</template>
<script setup lang="ts">
import type { Header, Item } from "@/types";
import { computed } from "vue";

interface Props {
  headers: Header[];
  items: Item[];
  searchValue?: string | null | undefined;
}
const props = defineProps<Props>();

const itemsData = computed(() => {
  if (!props.searchValue) return props.items;
  const lowerCase = props.searchValue.toLowerCase();

  return props.items.filter((item) => {
    return Object.values(item).some((field) => {
      return String(field).toLowerCase().includes(lowerCase);
    });
  });
});
</script>
<style scoped lang="scss">
.t-row,
table {
  border: 1px solid rgba(186, 186, 186, 0.82);
  border-radius: 10px !important;
}
.t-data:hover {
  background-color: rgba(211, 211, 211, 0.62);
  transition: all 0.3s;
}
</style>
