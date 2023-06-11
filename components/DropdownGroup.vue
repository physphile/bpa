<script setup lang="ts">
const group = ref<HTMLDivElement | null>(null);
const active = ref<HTMLDetailsElement | null>(null);

const toggleHandler = (e: Event) => {
  const item = e.target as HTMLElement;
  console.log(item);
  const parent = item.parentElement as HTMLDetailsElement;
  if (!parent.open) {
    console.log("parent", parent);
    console.log("active", active.value);
    if (active.value && active.value !== item) {
      active.value.open = false;
    }
    active.value = parent;
    parent.open = true;
  } else {
    parent.open = false;
  }
};

onMounted(() => {
  if (group.value) {
    const c = group.value.children;
    active.value = group.value.children.item(0) as HTMLDetailsElement;
    active.value.open = true;

    for (let i = 0; i < c.length; ++i) {
      (c.item(i)?.children.item(0) as HTMLElement).onclick = toggleHandler;
    }
  }
});
</script>

<template>
  <div ref="group">
    <slot></slot>
  </div>
</template>

<style scoped></style>
