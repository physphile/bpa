<script setup lang="ts">
import { carouselImages } from "~/constants";

const active = ref(0);
</script>

<template>
  <VDialog :title="carouselImages[active].title">
    <VCarousel
      :images="carouselImages"
      showCaption
      @change="(val: number) => active = val"
    />
  </VDialog>
</template>

<style scoped></style>
