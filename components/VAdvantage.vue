<script setup lang="ts">
defineProps<{ icon: string }>();
</script>

<template>
  <div class="flex">
    <div class="col icon">
      <svg width="36" height="36">
        <use :href="`/advantages.svg#${icon}`"></use>
      </svg>
    </div>
    <div class="col">
      <b>
        <slot class="c5">Масштабирование предприятия</slot>
      </b>
      <p class="c9 darkgrey">
        <slot name="desc">
          Инфраструктура, безопасность, Позиция Сертифицированный партнер
        </slot>
      </p>
    </div>
  </div>
</template>

<style scoped>
.flex img {
  padding: 17px;
}

.flex {
  gap: 20px;
  padding: 25px;
  border: 1.5px solid transparent;
  transition: all 0.3s ease-in;
  align-items: center;
}

.col {
  gap: 10px;
}

.flex:hover {
  border-color: var(--color-blue);
  border-radius: 16px;
  box-shadow: 0px 5px 15px rgba(15, 37, 52, 0.15);
}

.icon {
  fill: var(--color-dark-blue);
  stroke: var(--color-dark-blue);
  padding: 17px;
  border-radius: 999px;
  transition: all 0.3s ease-in;
}

.flex:hover .icon {
  background: var(--color-light-blue);
  fill: var(--color-blue);
  stroke: var(--color-blue);
}

@media screen and (max-width:  575px) {
  .flex {
    padding: 0;
  }
}
</style>
