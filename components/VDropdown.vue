<script setup lang="ts">
const open = ref(false);
const changeHandler = (e: Event) => {
  const drop = e.target as HTMLDetailsElement;
  open.value = drop.open;
};
</script>

<template>
  <details class="drop" @toggle="changeHandler">
    <summary>
      <span class="c2 noclick"> <slot>Country Dashboard</slot></span>
      <svg width="24" height="24">
        <use :href="`/simple.svg#${open ? 'minus' : 'plus'}`"></use>
      </svg>
    </summary>
    <p class="c6">
      <slot name="desc">
        Lorem ipsum dolor sit ammet, lorem ipsum dolor sit ammet, lorem sit
        ammet, lorem ipsum dolor sit ammet, lorem ipsum dolor sit ammet, ipsum
        dolor sit ammet.
      </slot>
    </p>
  </details>
</template>

<style scoped>
.drop {
  background: var(--color-light-blue);
  padding: 20px 30px;
  border-radius: 12px;
  margin-bottom: 30px;
}

.drop:last-of-type {
  margin-bottom: 0;
}

.drop summary {
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in;
}

.drop summary:hover {
  fill: var(--color-blue);
}

.c6 {
  margin-top: 15px;
}
</style>
