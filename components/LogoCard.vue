<script setup lang="ts">
defineProps<{ image: string }>();
</script>

<template>
  <div class="flex card">
    <img :src="image" alt="" />
  </div>
</template>

<style scoped>
.card {
  background: var(--color-light-blue);
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  height: 150px;
  min-width: 175px;
  transition: all 0.3s ease-in;
}
</style>
