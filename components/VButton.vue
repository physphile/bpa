<script setup lang="ts">
withDefaults(
  defineProps<{ outlined?: boolean; blue?: boolean; slim?: boolean }>(),
  {
    outlined: false,
    blue: false,
    slim: false,
  }
);
</script>

<template>
  <button
    class="button"
    :class="{ outlined, filled: !outlined }"
    :style="{
      height: `${slim ? 40 : 45}px`,
      '--color': blue ? 'var(--color-blue)' : 'var(--color-dark-blue)',
    }"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  --color: var(--color-dark-blue);

  border-radius: 8px;
  box-shadow: 0px 5px 10px rgba(15, 37, 52, 0.15);
  border: 1.5px solid transparent;
  font-size: 17px;
  font-weight: 500;
  background: white;
  transition: all 0.3s ease-in;
  min-width: 180px;
  padding: 0 24px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.outlined {
  border-color: var(--color);
}

.outlined:hover {
  background: var(--color);
  color: white;
}

.filled {
  background: var(--color);
  color: white;
}

.filled:hover {
  box-shadow: none;
  background: none;
  color: var(--color-dark-blue);
  border-color: var(--color);
}
</style>
