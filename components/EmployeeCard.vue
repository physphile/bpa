<script setup lang="ts">
defineProps<{
  image: string;
  job: string;
}>();
</script>

<template>
  <div class="flex card">
    <div><img :src="image" alt="" width="70" height="70" /></div>
    <div>
      <p class="c2 mb10"><slot /></p>

      <p class="c2 darkgrey">{{ job }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  gap: 30px;
}

.card img {
    border-radius: 999px;
}
</style>
