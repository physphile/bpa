<script setup lang="ts">
defineProps<{ modelValue: string }>();

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <input
    class="c8 input"
    @input="e => emit('update:modelValue', (e.target as HTMLInputElement).value)"
  />
</template>

<style scoped>
.input {
  background: var(--color-grey);
  border-radius: 8px;
  border: none;
  border: 1.5px solid transparent;
  height: 45px;
  padding: 0 15px;
  transition: background 0.3s ease-in;
}

.input:hover {
  background: var(--color-light-grey);
}

.input:focus {
  outline: none;
  border-color: var(--color-blue);
  caret-color: var(--color-blue);
}
</style>
