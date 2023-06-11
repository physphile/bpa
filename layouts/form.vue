<script setup lang="ts"></script>

<template>
  <slot />
  <hr class="hr" />
  <div class="anchor" id="contacts" />
  <FormSection />
</template>

<style scoped>
.hr {
  border: 1px solid var(--color-light-grey);
  width: 100%;
}

.anchor {
  position: relative;
  top: -70px;
}
</style>
