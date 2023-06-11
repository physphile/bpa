<script setup lang="ts">
withDefaults(defineProps<{ required?: boolean }>(), {
  required: false,
});

const id = Math.round(Math.random() * Number.MAX_SAFE_INTEGER).toString(16);
</script>

<template>
  <div class="flex check">
    <label :for="id" class="label">
      <input type="checkbox" :id="id" :required="required" />
    </label>
    <p class="text"><slot /></p>
  </div>
</template>

<style scoped>
.label {
  border: 2px solid var(--color-dark-blue);
  border-radius: 4px;
  padding: 0;
  display: inline-flex;

  position: relative;
  margin-right: 16px;
}

.label::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  pointer-events: none;
}

.label input {
  opacity: 0;
  width: 24px;
  height: 24px;

  cursor: pointer;
}
.label:has(input:checked)::after {
  content: url("/Check.svg");
  background: var(--color-dark-blue);
}

.check {
  align-items: flex-start;
}

.text {
  transition: all 0.3s ease-in;
}

.check:hover .text {
  color: var(--color-dark-grey);
}
</style>
