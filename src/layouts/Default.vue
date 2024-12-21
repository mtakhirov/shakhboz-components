<template>
  <div class="relative">
    <CHeader class="sticky z-10" />
    <div class="grid grid-cols-12">
      <div class="col-span-2">
        <CSidebar class="sticky top-[64px]" />
      </div>
      <div class="col-span-8 bg-white p-[20px]">
        <RouterView />
      </div>
      <div class="col-span-2">
        <CSubAside class="sticky top-[64px]" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CSidebar from '@/components/Base/CAside.vue';
import CHeader from '@/components/Base/CHeader.vue';
import CSubAside from '@/components/Base/CSubAside.vue';
</script>

<style scoped></style>
