<template>
  <div class="p-[32px] bg-white rounded-lg">
    <h2 class="text-black text-[20px] font-semibold mb-[20px]">Table</h2>
    <MyInput v-model="searchValue" placeholder="Search..." size="sm" />
    <MyTable
      class="my-[20px]"
      :headers="headers"
      :items="items"
      :search-value="searchValue"
    />
  </div>
</template>
<script setup lang="ts">
import MyTable from "@/components/Table/MyTable.vue";
import type { Header, Item } from "@/types";
import MyInput from "@/components/Input/MyInput.vue";
import { ref } from "vue";

const searchValue = ref(null);
const headers: Header[] = [
  { text: "Name", value: "name" },
  { text: "Email", value: "email" },
  { text: "Phone", value: "phone" },
  { text: "Country", value: "country" },
];
const items: Item[] = [
  {
    name: "Sardor",
    email: "ali@gmail.com",
    phone: "+998902887756",
    country: "Uzbekistan",
  },
  {
    name: "Yusuf",
    email: "sardor@gmail.com",
    phone: "+998903147756",
    country: "Uzbekistan",
  },
  {
    name: "Ali",
    email: "hasan@gmail.com",
    phone: "+998903147700",
    country: "Uzbekistan",
  },
  {
    name: "Hasan",
    email: "yusuf@gmail.com",
    phone: "+998903147711",
    country: "Uzbekistan",
  },
];
</script>
<style scoped></style>
