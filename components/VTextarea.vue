<script setup lang="ts">
defineProps<{ modelValue: string }>();

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <textarea
    class="c8 textarea"
    @input="e => emit('update:modelValue', (e.target as HTMLInputElement).value)"
  />
</template>

<style scoped>
.textarea {
  background: var(--color-grey);
  border-radius: 8px;
  border: none;
  border: 1.5px solid transparent;
  padding: 10px 15px 15px;
  resize: vertical;
  transition: background 0.3s ease-in;
}

.textarea:hover {
  background: var(--color-light-grey);
}

.textarea:focus {
  outline: none;
  border-color: var(--color-blue);
  caret-color: var(--color-blue);
}
</style>
