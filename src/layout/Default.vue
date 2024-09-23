<template>
  <CHeader />
  <div class="grid grid-cols-12">
    <CSidebar class="col-span-2" />
    <div class="col-span-8 bg-gray-300 p-[20px]">
      <RouterView />
    </div>
    <div class="col-span-2">
      <CSubAside />
    </div>
  </div>
</template>
<script setup lang="ts">
import CSidebar from "@/components/Base/CAside.vue";
import CHeader from "@/components/Base/CHeader.vue";
import CSubAside from "@/components/Base/CSubAside.vue";
</script>
<style scoped></style>
