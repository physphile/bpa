<script setup lang="ts"></script>

<template>
  <h2 class="h1"><slot></slot></h2>
</template>

<style scoped>
.h1 {
  font-family: Furore, sans-serif;
  font-weight: 400;
  font-size: 48px;
  transition: all 0.3s ease-in;
}

@media screen and (max-width:  575px) {
  .h1 {
    font-size: 36px;
  }
}
</style>
